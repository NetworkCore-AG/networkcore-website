import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock, Shield, TrendingUp, Rocket, DollarSign, X } from "lucide-react";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const COUNTRIES_EN = [
  "Mexico", "Brazil", "Colombia", "Chile", "Argentina", "Peru",
  "Costa Rica", "Uruguay", "Panama", "Dominican Rep.", "Ecuador", "Bolivia",
  "Paraguay", "El Salvador", "Honduras", "Puerto Rico", "Nicaragua", "Guatemala", "Guyana",
];
const COUNTRIES_ES = [
  "México", "Brasil", "Colombia", "Chile", "Argentina", "Perú",
  "Costa Rica", "Uruguay", "Panamá", "Rep. Dominicana", "Ecuador", "Bolivia",
  "Paraguay", "El Salvador", "Honduras", "Puerto Rico", "Nicaragua", "Guatemala", "Guyana",
];
const COUNTRIES_PT = [
  "México", "Brasil", "Colômbia", "Chile", "Argentina", "Peru",
  "Costa Rica", "Uruguai", "Panamá", "Rep. Dominicana", "Equador", "Bolívia",
  "Paraguai", "El Salvador", "Honduras", "Porto Rico", "Nicarágua", "Guatemala", "Guiana",
];

type Lang = "en" | "es" | "pt";
const SUPPORTED: Lang[] = ["en", "es", "pt"];
const HTML_LANG: Record<Lang, string> = { en: "en", es: "es", pt: "pt-BR" };
const BASE = "https://networkcore.org";
const PATH = "/charge-point-operators/latam-first-wave";
const urlFor = (l: Lang) => `${BASE}${l === "en" ? "" : "/" + l}${PATH}`;

const TRANSLATIONS = {
  en: {
    meta: {
      title: "EV Charging Distribution Channel for LATAM | NetworkCore",
      description: "NetworkCore brings extra drivers, T+2 (48-hour) settlement and zero monthly fees to CPOs across LATAM. Reserve your founding-CPO spot in your country.",
      ogAlt: "Electric vehicle charging — NetworkCore LATAM First Wave",
    },
    switcher: { en: "English", es: "Español", pt: "Português" },
    hero: {
      title: "The EV Charging Distribution Channel for LATAM",
      sub: "We bring extra drivers, 48-hour settlement and 0 monthly fees to CPOs across LATAM. Founding CPOs in each country shape how the roaming network gets built in their market.",
      cta: "Reserve your spot",
      imgAlt: "Electric Range Rover charging — LATAM First Wave",
    },
    reality: {
      title: "The Reality",
      sub: "You built the infrastructure. The vehicles are arriving. Drivers are ready. But the commercial layer underneath never caught up to the hardware.",
      items: [
        { title: "Stations Are Underutilised", description: "Most public DC fast chargers operate at 10–20% utilisation. Level 2 chargers often below 8%. Hardware sits idle while operating costs accrue daily." },
        { title: "Cash Flow Is Broken", description: "30–90 day settlement cycles through banks, processors, and roaming hubs. Operators fund their own growth from cash earned a quarter ago." },
        { title: "Chargebacks Drain Operations", description: "In Mexico and across LATAM, contracargos are not edge cases but a constant drag. Slow resolution, unclear liability, lost margin." },
        { title: "Roaming Hubs Don't Move Money", description: "Traditional roaming solutions handle technical interoperability between bilateral partners. They don't bring new demand. They don't settle in 48 hours." },
      ],
    },
    offer: {
      title: "What Founding CPOs Receive",
      sub: "A single integration. Everything that's been missing. One OCPI connection unlocks new driver demand, fast settlement, automated compliance, and zero risk on the way in.",
      sections: [
        { title: "Incremental Utilisation — No Capex", description: "We connect your stations to aggregated driver demand from Distribution Partners across LATAM.", points: ["One integration, many channels", "No new hardware", "No customer acquisition spend"] },
        { title: "Get Paid in 48 Hours", description: "Every charging session settled at T+2. Cash flow that funds growth instead of constraining it. No quarterly reconciliations, no manual chasing.", points: ["T+2 settlement guaranteed", "Automated reconciliation", "Transparent reporting"] },
        { title: "Pricing Sovereignty", description: "The price shown at the charger is the price the driver pays. No roaming markups. No brand distortion. You retain full control to adjust tariffs dynamically.", points: ["Your public tariff is the only tariff", "Dynamic and V2G pricing supported", "No third-party markups, ever"] },
        { title: "Zero-Downside Structure", description: "You pay nothing unless we deliver new business. No setup. No monthly. No exclusivity. We earn a small commission only on the incremental sessions we generate.", points: ["No upfront integration fees", "No SaaS subscription", "Cancel at any time"] },
        { title: "Operational Shield", description: "We absorb the financial and compliance layer so you can focus on infrastructure. CFDI, NF-e, boleta electrónica, FX, fraud, chargebacks — handled.", points: ["LATAM tax automation per jurisdiction", "Multi-currency FX at session close", "Dispute resolution and liability allocation"] },
        { title: "Live in Under 60 Minutes", description: "If your OCPI endpoint is ready, technical activation runs in under an hour. Commercial onboarding in minutes. Revenue from the first activated session.", points: ["OCPI 2.2.1 standard", "Works with Ampeco, Driivz, Monta, others", "Immediate revenue from session one"] },
      ],
    },
    program: {
      title: "The First-Wave Program",
      sub: "Founding CPOs in each country define their market. We onboard a limited number of CPO partners per market to coordinate demand aggregation and rollout properly. The first signers in each country shape how NetworkCore enters, and capture the early Distribution Partner volume as it ramps.",
      cta: "Reserve your spot",
      benefits: [
        { title: "First Access to Demand", description: "As Distribution Partners come online — Parco, regional fleets, OEMs entering LATAM — your stations get surfaced to their drivers first." },
        { title: "Founding-CPO Commercials", description: "Lifetime favourable terms for first-wave signers. The volume increases as the network scales." },
        { title: "Direct Input on Rollout", description: "You sit at the table when we structure how NetworkCore enters your country. The first wave shapes the standard." },
        { title: "Market Intelligence", description: "Aggregated data on regional Distribution Partner volume, driver patterns, and cross-border flows — shared with founding partners." },
        { title: "Priority Integration", description: "Dedicated technical support, named CSMS-level integration coordination, and a direct line to our team during onboarding." },
        { title: "Co-Marketing Visibility", description: "Featured in launch communications as a founding network operator. Your brand carries weight as more drivers join the platform." },
      ],
    },
    markets: { title: "Markets Opening Across LATAM", countries: COUNTRIES_EN },
    compare: {
      title: "How This Is Different",
      sub: "NetworkCore is not another roaming hub. We operate on a different layer of the EV charging stack. Roaming hubs pass data between partners you negotiate yourself. We bring you the partners and the demand they represent.",
      hubsHeader: "Traditional Roaming Hubs",
      ncHeader: "NetworkCore",
      closing: "Public EV charging scaled hardware before it scaled commercial infrastructure. In LATAM, that gap is the structural reason operators struggle. NetworkCore exists to close it.",
      rows: [
        { hub: "Pass data between bilateral partners you negotiate yourself", nc: "Brings you new Distribution Partners" },
        { hub: "Subscription pricing regardless of revenue delivered", nc: "Commission only on incremental sessions we generate" },
        { hub: "European-anchored, thin LATAM coverage", nc: "Purpose-built for LATAM from the start" },
        { hub: "Settlement runs through your existing bank cycles", nc: "T+2 settlement, every session, every currency" },
        { hub: "Compliance and tax remain your problem", nc: "CFDI, NF-e, FX, chargebacks handled in the clearing layer" },
        { hub: "No share of demand-side margin", nc: "Revenue share with no exclusivity, cancel any time" },
      ],
    },
    form: {
      title: "Reserve Your Spot",
      sub: "Join the First Wave for Your Country",
      submit: "Reserve Your Spot",
      sending: "Sending...",
      helper: "We respond within 48 hours · No automated sequences · Your data stays with NetworkCore",
      success: "Thanks — we'll be in touch within 48 hours.",
      optionalToggle: "Tell us more (optional)",
      fields: {
        company: "Company Name", companyPh: "Your company",
        email: "Business Email", emailPh: "you@company.com",
        fullName: "Full Name", fullNamePh: "First and last name",
        country: "Country of Operations", countryPh: "Select country",
        stations: "Number of Charging Stations", stationsPh: "Select range",
        csms: "CSMS in Use", csmsPh: "Select CSMS",
        notSure: "Not sure", other: "Other",
        ready: "Ready to Integrate", readyPh: "Select timing",
        readyOpts: ["Yes — OCPI endpoint live", "Within 30 days", "Within 90 days", "Exploring"],
        notes: "Anything We Should Know?", notesPh: "Optional — share anything that would help us prepare.",
      },
    },
  },
  es: {
    meta: {
      title: "Canal de Distribución de Carga de VE para LATAM | NetworkCore",
      description: "NetworkCore aporta conductores adicionales, liquidación T+2 (48 horas) y cero cuotas mensuales a los CPOs de LATAM. Reserva tu lugar como CPO fundador en tu país.",
      ogAlt: "Vehículo eléctrico cargando — NetworkCore LATAM Primera Ola",
    },
    switcher: { en: "English", es: "Español", pt: "Português" },
    hero: {
      title: "El Canal de Distribución de Carga de VE para LATAM",
      sub: "Aportamos conductores adicionales, liquidación en 48 horas y 0 cuotas mensuales a los CPOs en toda LATAM. Los CPOs fundadores en cada país definen cómo se construye la red de roaming en su mercado.",
      cta: "Reserva tu lugar",
      imgAlt: "Range Rover eléctrico cargando — LATAM Primera Ola",
    },
    reality: {
      title: "La Realidad",
      sub: "Construiste la infraestructura. Los vehículos están llegando. Los conductores están listos. Pero la capa comercial debajo nunca alcanzó al hardware.",
      items: [
        { title: "Estaciones Infrautilizadas", description: "La mayoría de los cargadores rápidos DC públicos operan al 10–20% de utilización. Los de Nivel 2 a menudo por debajo del 8%. El hardware está inactivo mientras los costes operativos se acumulan a diario." },
        { title: "El Flujo de Caja Está Roto", description: "Ciclos de liquidación de 30 a 90 días a través de bancos, procesadores y hubs de roaming. Los operadores financian su propio crecimiento con dinero ganado hace un trimestre." },
        { title: "Los Contracargos Desangran las Operaciones", description: "En México y en toda LATAM, los contracargos no son casos aislados sino una carga constante. Resolución lenta, responsabilidad poco clara, margen perdido." },
        { title: "Los Hubs de Roaming No Mueven Dinero", description: "Las soluciones tradicionales de roaming gestionan la interoperabilidad técnica entre socios bilaterales. No traen nueva demanda. No liquidan en 48 horas." },
      ],
    },
    offer: {
      title: "Lo Que Reciben los CPOs Fundadores",
      sub: "Una sola integración. Todo lo que faltaba. Una conexión OCPI desbloquea nueva demanda de conductores, liquidación rápida, cumplimiento automatizado y cero riesgo al entrar.",
      sections: [
        { title: "Utilización Incremental — Sin Capex", description: "Conectamos tus estaciones a la demanda agregada de conductores de los Socios de Distribución en toda LATAM.", points: ["Una integración, muchos canales", "Sin hardware nuevo", "Sin gasto en adquisición de clientes"] },
        { title: "Cobra en 48 Horas", description: "Cada sesión de carga liquidada en T+2. Flujo de caja que financia el crecimiento en lugar de limitarlo. Sin conciliaciones trimestrales, sin reclamos manuales.", points: ["Liquidación T+2 garantizada", "Conciliación automatizada", "Reportes transparentes"] },
        { title: "Soberanía de Precios", description: "El precio que aparece en el cargador es el precio que paga el conductor. Sin recargos de roaming. Sin distorsión de marca. Mantienes el control total para ajustar tarifas dinámicamente.", points: ["Tu tarifa pública es la única tarifa", "Compatible con precios dinámicos y V2G", "Sin recargos de terceros, nunca"] },
        { title: "Estructura Sin Riesgo", description: "No pagas nada a menos que entreguemos nuevo negocio. Sin instalación. Sin mensualidad. Sin exclusividad. Ganamos una pequeña comisión solo sobre las sesiones incrementales que generamos.", points: ["Sin cuotas de integración iniciales", "Sin suscripción SaaS", "Cancela en cualquier momento"] },
        { title: "Escudo Operativo", description: "Absorbemos la capa financiera y de cumplimiento para que te enfoques en la infraestructura. CFDI, NF-e, boleta electrónica, FX, fraude, contracargos — gestionados.", points: ["Automatización fiscal LATAM por jurisdicción", "FX multidivisa al cierre de sesión", "Resolución de disputas y asignación de responsabilidad"] },
        { title: "En Vivo en Menos de 60 Minutos", description: "Si tu endpoint OCPI está listo, la activación técnica se realiza en menos de una hora. Onboarding comercial en minutos. Ingresos desde la primera sesión activada.", points: ["Estándar OCPI 2.2.1", "Funciona con Ampeco, Driivz, Monta y otros", "Ingresos inmediatos desde la sesión uno"] },
      ],
    },
    program: {
      title: "El Programa Primera Ola",
      sub: "Los CPOs fundadores en cada país definen su mercado. Incorporamos un número limitado de socios CPO por mercado para coordinar la agregación de demanda y el despliegue adecuadamente. Los primeros firmantes en cada país dan forma a cómo entra NetworkCore y capturan el volumen temprano de los Socios de Distribución a medida que escala.",
      cta: "Reserva tu lugar",
      benefits: [
        { title: "Acceso Prioritario a la Demanda", description: "A medida que los Socios de Distribución se incorporan — Parco, flotas regionales, OEMs entrando a LATAM — tus estaciones se muestran a sus conductores primero." },
        { title: "Condiciones de CPO Fundador", description: "Términos favorables de por vida para los firmantes de la primera ola. El volumen aumenta a medida que la red escala." },
        { title: "Voz Directa en el Despliegue", description: "Te sientas a la mesa cuando estructuramos cómo NetworkCore entra en tu país. La primera ola define el estándar." },
        { title: "Inteligencia de Mercado", description: "Datos agregados sobre el volumen regional de Socios de Distribución, patrones de conductores y flujos transfronterizos — compartidos con los socios fundadores." },
        { title: "Integración Prioritaria", description: "Soporte técnico dedicado, coordinación de integración nominada a nivel CSMS y línea directa con nuestro equipo durante el onboarding." },
        { title: "Visibilidad en Co-Marketing", description: "Destacado en las comunicaciones de lanzamiento como operador de red fundador. Tu marca gana peso a medida que más conductores se unen a la plataforma." },
      ],
    },
    markets: { title: "Mercados Abriendo en Toda LATAM", countries: COUNTRIES_ES },
    compare: {
      title: "En Qué Se Diferencia",
      sub: "NetworkCore no es otro hub de roaming. Operamos en una capa diferente de la pila de carga de VE. Los hubs de roaming pasan datos entre socios que tú mismo negocias. Nosotros te traemos los socios y la demanda que representan.",
      hubsHeader: "Hubs de Roaming Tradicionales",
      ncHeader: "NetworkCore",
      closing: "La carga pública de VE escaló el hardware antes que la infraestructura comercial. En LATAM, esa brecha es la razón estructural por la que los operadores luchan. NetworkCore existe para cerrarla.",
      rows: [
        { hub: "Pasan datos entre socios bilaterales que tú mismo negocias", nc: "Te trae nuevos Socios de Distribución" },
        { hub: "Precios por suscripción independientemente de los ingresos generados", nc: "Comisión solo sobre las sesiones incrementales que generamos" },
        { hub: "Anclados en Europa, cobertura escasa en LATAM", nc: "Diseñado específicamente para LATAM desde el inicio" },
        { hub: "La liquidación corre a través de tus ciclos bancarios existentes", nc: "Liquidación T+2, cada sesión, cada divisa" },
        { hub: "El cumplimiento y los impuestos siguen siendo tu problema", nc: "CFDI, NF-e, FX, contracargos gestionados en la capa de liquidación" },
        { hub: "Sin participación en el margen del lado de la demanda", nc: "Reparto de ingresos sin exclusividad, cancela cuando quieras" },
      ],
    },
    form: {
      title: "Reserva Tu Lugar",
      sub: "Únete a la Primera Ola para Tu País",
      submit: "Reserva Tu Lugar",
      sending: "Enviando...",
      helper: "Respondemos en 48 horas · Sin secuencias automatizadas · Tus datos se quedan con NetworkCore",
      success: "Gracias — nos pondremos en contacto en 48 horas.",
      optionalToggle: "Cuéntanos más (opcional)",
      fields: {
        company: "Nombre de la Empresa", companyPh: "Tu empresa",
        email: "Email Corporativo", emailPh: "tu@empresa.com",
        fullName: "Nombre Completo", fullNamePh: "Nombre y apellido",
        country: "País de Operaciones", countryPh: "Selecciona país",
        stations: "Número de Estaciones de Carga", stationsPh: "Selecciona rango",
        csms: "CSMS en Uso", csmsPh: "Selecciona CSMS",
        notSure: "No estoy seguro", other: "Otro",
        ready: "Listo para Integrar", readyPh: "Selecciona tiempo",
        readyOpts: ["Sí — endpoint OCPI activo", "Dentro de 30 días", "Dentro de 90 días", "Explorando"],
        notes: "¿Algo Que Debamos Saber?", notesPh: "Opcional — comparte cualquier cosa que nos ayude a prepararnos.",
      },
    },
  },
  pt: {
    meta: {
      title: "Canal de Distribuição de Recarga de VE para LATAM | NetworkCore",
      description: "A NetworkCore traz motoristas adicionais, liquidação T+2 (48 horas) e zero mensalidades para CPOs em toda a LATAM. Reserve seu lugar como CPO fundador no seu país.",
      ogAlt: "Veículo elétrico carregando — NetworkCore LATAM Primeira Onda",
    },
    switcher: { en: "English", es: "Español", pt: "Português" },
    hero: {
      title: "O Canal de Distribuição de Recarga de VE para a LATAM",
      sub: "Trazemos motoristas adicionais, liquidação em 48 horas e 0 mensalidades para CPOs em toda a LATAM. Os CPOs fundadores em cada país moldam como a rede de roaming é construída em seu mercado.",
      cta: "Reserve seu lugar",
      imgAlt: "Range Rover elétrico carregando — LATAM Primeira Onda",
    },
    reality: {
      title: "A Realidade",
      sub: "Você construiu a infraestrutura. Os veículos estão chegando. Os motoristas estão prontos. Mas a camada comercial por baixo nunca acompanhou o hardware.",
      items: [
        { title: "Estações Subutilizadas", description: "A maioria dos carregadores rápidos DC públicos opera com 10–20% de utilização. Os de Nível 2 frequentemente abaixo de 8%. O hardware fica ocioso enquanto os custos operacionais se acumulam diariamente." },
        { title: "O Fluxo de Caixa Está Quebrado", description: "Ciclos de liquidação de 30 a 90 dias através de bancos, processadoras e hubs de roaming. Os operadores financiam seu próprio crescimento com dinheiro ganho há um trimestre." },
        { title: "Os Chargebacks Drenam as Operações", description: "No Brasil, no México e em toda a LATAM, os chargebacks não são casos isolados, mas um peso constante. Resolução lenta, responsabilidade incerta, margem perdida." },
        { title: "Hubs de Roaming Não Movem Dinheiro", description: "As soluções tradicionais de roaming cuidam da interoperabilidade técnica entre parceiros bilaterais. Elas não trazem nova demanda. Não liquidam em 48 horas." },
      ],
    },
    offer: {
      title: "O Que Recebem os CPOs Fundadores",
      sub: "Uma única integração. Tudo o que estava faltando. Uma conexão OCPI desbloqueia nova demanda de motoristas, liquidação rápida, conformidade automatizada e zero risco na entrada.",
      sections: [
        { title: "Utilização Incremental — Sem Capex", description: "Conectamos suas estações à demanda agregada de motoristas dos Parceiros de Distribuição em toda a LATAM.", points: ["Uma integração, muitos canais", "Sem hardware novo", "Sem gasto com aquisição de clientes"] },
        { title: "Receba em 48 Horas", description: "Cada sessão de recarga liquidada em T+2. Fluxo de caixa que financia o crescimento em vez de limitá-lo. Sem reconciliações trimestrais, sem cobranças manuais.", points: ["Liquidação T+2 garantida", "Reconciliação automatizada", "Relatórios transparentes"] },
        { title: "Soberania de Preços", description: "O preço exibido no carregador é o preço que o motorista paga. Sem markups de roaming. Sem distorção de marca. Você mantém o controle total para ajustar tarifas dinamicamente.", points: ["Sua tarifa pública é a única tarifa", "Suporte a preços dinâmicos e V2G", "Sem markups de terceiros, nunca"] },
        { title: "Estrutura Sem Risco", description: "Você não paga nada a menos que entreguemos novos negócios. Sem setup. Sem mensalidade. Sem exclusividade. Ganhamos uma pequena comissão apenas sobre as sessões incrementais que geramos.", points: ["Sem taxas iniciais de integração", "Sem assinatura SaaS", "Cancele a qualquer momento"] },
        { title: "Escudo Operacional", description: "Absorvemos a camada financeira e de conformidade para que você foque na infraestrutura. NF-e, CFDI, boleta electrónica, FX, fraude, chargebacks — tudo cuidado.", points: ["Automação fiscal LATAM por jurisdição", "FX multimoeda no fechamento da sessão", "Resolução de disputas e alocação de responsabilidade"] },
        { title: "Ativo em Menos de 60 Minutos", description: "Se seu endpoint OCPI estiver pronto, a ativação técnica ocorre em menos de uma hora. Onboarding comercial em minutos. Receita desde a primeira sessão ativada.", points: ["Padrão OCPI 2.2.1", "Funciona com Ampeco, Driivz, Monta e outros", "Receita imediata desde a primeira sessão"] },
      ],
    },
    program: {
      title: "O Programa Primeira Onda",
      sub: "Os CPOs fundadores em cada país definem seu mercado. Integramos um número limitado de parceiros CPO por mercado para coordenar a agregação de demanda e o lançamento adequadamente. Os primeiros signatários em cada país moldam como a NetworkCore entra e capturam o volume inicial dos Parceiros de Distribuição à medida que cresce.",
      cta: "Reserve seu lugar",
      benefits: [
        { title: "Acesso Prioritário à Demanda", description: "À medida que os Parceiros de Distribuição entram em operação — Parco, frotas regionais, OEMs chegando à LATAM — suas estações são exibidas primeiro para os motoristas deles." },
        { title: "Condições de CPO Fundador", description: "Condições vitalícias favoráveis para os signatários da primeira onda. O volume aumenta à medida que a rede cresce." },
        { title: "Voz Direta no Rollout", description: "Você senta à mesa quando estruturamos como a NetworkCore entra no seu país. A primeira onda define o padrão." },
        { title: "Inteligência de Mercado", description: "Dados agregados sobre volume regional de Parceiros de Distribuição, padrões de motoristas e fluxos transfronteiriços — compartilhados com os parceiros fundadores." },
        { title: "Integração Prioritária", description: "Suporte técnico dedicado, coordenação de integração nomeada em nível CSMS e linha direta com nossa equipe durante o onboarding." },
        { title: "Visibilidade em Co-Marketing", description: "Destaque nas comunicações de lançamento como operador de rede fundador. Sua marca ganha peso à medida que mais motoristas aderem à plataforma." },
      ],
    },
    markets: { title: "Mercados Abrindo Em Toda a LATAM", countries: COUNTRIES_PT },
    compare: {
      title: "Como Isto É Diferente",
      sub: "A NetworkCore não é mais um hub de roaming. Operamos em uma camada diferente da stack de recarga de VE. Hubs de roaming passam dados entre parceiros que você mesmo negocia. Nós trazemos os parceiros e a demanda que eles representam.",
      hubsHeader: "Hubs de Roaming Tradicionais",
      ncHeader: "NetworkCore",
      closing: "A recarga pública de VE escalou o hardware antes da infraestrutura comercial. Na LATAM, essa lacuna é a razão estrutural pela qual os operadores sofrem. A NetworkCore existe para fechá-la.",
      rows: [
        { hub: "Passam dados entre parceiros bilaterais que você mesmo negocia", nc: "Traz novos Parceiros de Distribuição" },
        { hub: "Preço por assinatura independentemente da receita entregue", nc: "Comissão apenas sobre as sessões incrementais que geramos" },
        { hub: "Ancorados na Europa, cobertura fina na LATAM", nc: "Construído sob medida para a LATAM desde o início" },
        { hub: "Liquidação roda pelos seus ciclos bancários existentes", nc: "Liquidação T+2, cada sessão, cada moeda" },
        { hub: "Conformidade e impostos continuam sendo seu problema", nc: "NF-e, CFDI, FX, chargebacks tratados na camada de liquidação" },
        { hub: "Sem participação na margem do lado da demanda", nc: "Divisão de receita sem exclusividade, cancele quando quiser" },
      ],
    },
    form: {
      title: "Reserve Seu Lugar",
      sub: "Junte-se à Primeira Onda do Seu País",
      submit: "Reserve Seu Lugar",
      sending: "Enviando...",
      helper: "Respondemos em 48 horas · Sem sequências automatizadas · Seus dados ficam com a NetworkCore",
      success: "Obrigado — entraremos em contato em 48 horas.",
      optionalToggle: "Conte-nos mais (opcional)",
      fields: {
        company: "Nome da Empresa", companyPh: "Sua empresa",
        email: "E-mail Corporativo", emailPh: "voce@empresa.com",
        fullName: "Nome Completo", fullNamePh: "Nome e sobrenome",
        country: "País de Operações", countryPh: "Selecione o país",
        stations: "Número de Estações de Recarga", stationsPh: "Selecione faixa",
        csms: "CSMS em Uso", csmsPh: "Selecione CSMS",
        notSure: "Não tenho certeza", other: "Outro",
        ready: "Pronto para Integrar", readyPh: "Selecione prazo",
        readyOpts: ["Sim — endpoint OCPI ativo", "Em até 30 dias", "Em até 90 dias", "Explorando"],
        notes: "Algo Que Devemos Saber?", notesPh: "Opcional — compartilhe qualquer coisa que ajude na preparação.",
      },
    },
  },
} as const;

const LatamFirstWave = () => {
  const { lang: rawLang } = useParams<{ lang?: string }>();
  const lang: Lang = SUPPORTED.includes(rawLang as Lang) ? (rawLang as Lang) : "en";
  const t = TRANSLATIONS[lang];

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const scrollToForm = () =>
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang={HTML_LANG[lang]} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={urlFor(lang)} />
        <link rel="alternate" hrefLang="en" href={urlFor("en")} />
        <link rel="alternate" hrefLang="es" href={urlFor("es")} />
        <link rel="alternate" hrefLang="pt" href={urlFor("pt")} />
        <link rel="alternate" hrefLang="x-default" href={urlFor("en")} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:url" content={urlFor(lang)} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === "en" ? "en_US" : lang === "es" ? "es_ES" : "pt_BR"} />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
      </Helmet>

      <Navigation transparent />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/campaigns/latam-first-wave.jpg"
          alt={t.hero.imgAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="hero-lead-grid">
          <div className="hero-lead-copy">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-white tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl">
            {t.hero.sub}
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">{t.form.title}</h2>
            <p className="mb-5 text-background/70 font-light">{t.form.sub}</p>
            <PartnerSignupForm
              heroMode
            initialValues={selectedCountry ? { country: selectedCountry } : undefined}
            formLabel={`LATAM CPO (${lang.toUpperCase()})`}
            submitLabel={t.form.submit}
            sendingLabel={t.form.sending}
            optionalToggleLabel={t.form.optionalToggle}
            helperText={t.form.helper}
            successMessage={t.form.success}
            requiredFields={[
              { name: "company", label: t.form.fields.company, type: "text", required: true, placeholder: t.form.fields.companyPh },
              { name: "email", label: t.form.fields.email, type: "email", required: true, placeholder: t.form.fields.emailPh },
              { name: "fullName", label: t.form.fields.fullName, type: "text", required: true, placeholder: t.form.fields.fullNamePh },
              {
                name: "country",
                label: t.form.fields.country,
                type: "select",
                required: true,
                placeholder: t.form.fields.countryPh,
                options: t.markets.countries as unknown as string[],
              },
              {
                name: "stations",
                label: t.form.fields.stations,
                type: "select",
                required: true,
                placeholder: t.form.fields.stationsPh,
                options: ["1–10", "10–50", "50–250", "250–1,000", "1,000+"],
              },
            ]}
            optionalFields={[
              {
                name: "csms",
                label: t.form.fields.csms,
                type: "select",
                placeholder: t.form.fields.csmsPh,
                options: ["Ampeco", "Driivz", "ChargePoint", "Monta", "EVgo OS", "Greenflux", "Etrel", t.form.fields.notSure, t.form.fields.other],
              },
              {
                name: "readyToIntegrate",
                label: t.form.fields.ready,
                type: "select",
                placeholder: t.form.fields.readyPh,
                options: t.form.fields.readyOpts as unknown as string[],
              },
              {
                name: "notes",
                label: t.form.fields.notes,
                type: "textarea",
                placeholder: t.form.fields.notesPh,
              },
            ]}
          />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        </div>
      </section>

      {/* What founding CPOs receive */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              {t.offer.title}
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-4xl mx-auto">
              {t.offer.sub}
            </p>
          </div>

          {/* Comparison: Traditional Roaming Hub vs NetworkCore */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-2xl border border-border/50 bg-card/30">
              <h3 className="text-lg font-medium text-foreground mb-6 pb-4 border-b border-border/50">
                {t.compare.hubsHeader}
              </h3>
              <div className="space-y-4">
                {t.compare.rows.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-light text-sm leading-relaxed">{r.hub}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-foreground/30 bg-card">
              <h3 className="text-lg font-medium text-foreground mb-6 pb-4 border-b border-border/50">
                {t.compare.ncHeader}
              </h3>
              <div className="space-y-4">
                {t.compare.rows.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-1" />
                    <span className="text-foreground/90 font-light text-sm leading-relaxed">{r.nc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-14">
            {t.offer.sections.map((section, idx) => {
              const icons = [TrendingUp, Clock, Shield, DollarSign, Zap, Rocket];
              const Icon = icons[idx] ?? TrendingUp;
              return (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light mb-6">
                      {section.description}
                    </p>
                    <div className="space-y-2">
                      {section.points.map((p, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-foreground/60 flex-shrink-0" />
                          <span className="text-foreground/80 font-light">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The First-Wave Program */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              {t.program.title}
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              {t.program.sub}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {t.program.benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="text-lg font-medium text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="ghost"
              size="compact"
              onClick={scrollToForm}
              className="border border-foreground/60 text-foreground hover:bg-foreground/10 hover:border-foreground font-medium px-6"
            >
              {t.program.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              {t.markets.title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {t.markets.countries.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => handleCountryClick(c)}
                className="px-4 py-2 rounded-full border border-border bg-card/50 text-foreground/80 text-sm font-light hover:border-foreground/60 hover:text-foreground hover:bg-card transition-colors cursor-pointer"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default LatamFirstWave;
