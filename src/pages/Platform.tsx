import { useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { stationGeoJSON } from "@/data/stationLocations";
import MovingBanner from "@/components/MovingBanner";
import { cpoPartners } from "@/data/cpoPartners";

mapboxgl.accessToken = "pk.eyJ1IjoidmljdG9ybmV0d29ya2NvcmUiLCJhIjoiY21rOHNuY2h1MGd5ZTNkcjMwbWU1dGFqZSJ9.yZnp-iPdhXdLI1i5XJh1Dw";

const Platform = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const spinRef = useRef<number | null>(null);
  const userInteractingRef = useRef(false);

  const spinGlobe = useCallback(() => {
    if (!mapRef.current || userInteractingRef.current) return;
    const center = mapRef.current.getCenter();
    center.lng += 0.4;
    mapRef.current.easeTo({ center, duration: 1000, easing: (n) => n });
  }, []);

  useEffect(() => {
    // Skip Mapbox during build-time pre-rendering — WebGL/tiles aren't needed for HTML capture
    if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("prerender") === "1") return;
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-99, 23],
      zoom: 2.2,
      projection: "globe",
      attributionControl: false,
      logoPosition: "bottom-left",
      dragPan: true,
      dragRotate: true,
      scrollZoom: false,
      doubleClickZoom: false,
      touchZoomRotate: false,
    });

    mapRef.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    const onInteractionStart = () => { userInteractingRef.current = true; };
    const onInteractionEnd = () => { userInteractingRef.current = false; };
    mapRef.current.on("mousedown", onInteractionStart);
    mapRef.current.on("touchstart", onInteractionStart);
    mapRef.current.on("mouseup", onInteractionEnd);
    mapRef.current.on("touchend", onInteractionEnd);
    mapRef.current.on("dragend", onInteractionEnd);

    mapRef.current.on("style.load", () => {
      const map = mapRef.current!;

      map.setFog({
        color: "rgb(255, 255, 255)",
        "high-color": "rgb(180, 200, 230)",
        "horizon-blend": 0.05,
        "space-color": "rgb(6, 8, 18)",
        "star-intensity": 0.85,
      });

      // Add all stations as a GeoJSON source
      map.addSource("stations", {
        type: "geojson",
        data: stationGeoJSON,
      });

      // Station dots layer
      map.addLayer({
        id: "stations-dots",
        type: "circle",
        source: "stations",
        paint: {
          "circle-radius": [
            "interpolate", ["linear"], ["zoom"],
            1, 2,
            3, 3,
            6, 5,
            10, 8,
          ],
          "circle-color": "#22c55e",
          "circle-stroke-width": 1,
          "circle-stroke-color": "#ffffff",
          "circle-opacity": 0.85,
        },
      });

      // Start spinning
      spinRef.current = window.setInterval(spinGlobe, 1000);
    });

    return () => {
      if (spinRef.current) clearInterval(spinRef.current);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [spinGlobe]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>The Network | NetworkCore</title>
        <meta name="description" content="Access the NetworkCore EV charging network. Live network of charging stations across Europe. Log in to your dashboard or become a partner." />
        <meta property="og:title" content="The Network | NetworkCore" />
        <meta property="og:description" content="Access the NetworkCore EV charging network. Live network of charging stations across Europe." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/the-network" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Network | NetworkCore" />
        <meta name="twitter:description" content="Live network of EV charging stations across Europe." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/the-network" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"The Network","item":"https://networkcore.org/the-network"}]})}</script>
      </Helmet>

      <Navigation />

      <section className="pt-24 pb-8 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-light text-background tracking-tight">
            The NetworkCore Network
          </h1>
          <p className="mt-4 text-base md:text-lg text-background/70 font-light max-w-full mx-auto leading-relaxed">
            Connect and access our growing network of charging operators and distribution partners.
          </p>
        </div>
      </section>

      <section className="relative">
        <div ref={mapContainerRef} className="w-full h-[60vh] md:h-[70vh]" />

        {/* Live status badge — dot only on mobile, full pill on md+ (top-left to avoid zoom controls) */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex items-center gap-2 md:rounded-full md:bg-foreground/90 md:backdrop-blur-md md:px-3.5 md:py-1.5 md:text-xs md:font-medium md:text-background md:shadow-lg md:ring-1 md:ring-foreground/10">
          <span className="relative flex h-2.5 w-2.5 md:h-2 md:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 md:h-2 md:w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="hidden md:inline">Live network</span>
        </div>

        {/* Centered Join the Network CTA overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 md:bottom-10 z-10 flex justify-center">
          <a
            href="https://hub.networkcore.org/partner/ui/#signup"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center justify-center h-12 rounded-md px-10 bg-foreground text-background hover:bg-foreground/90 transition-colors text-base font-semibold shadow-lg"
          >
            Join the Network
          </a>
        </div>
      </section>

      <section className="py-8 bg-background">

        <div className="max-w-5xl mx-auto px-4 text-center mb-4">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">Early-stage partners</p>
        </div>
        <MovingBanner partners={cpoPartners} mode="maskBlack" />
      </section>



      <Footer />

      <style>{`
        .mapboxgl-ctrl-logo { display: none !important; }
      `}</style>
    </div>
  );
};

export default Platform;
