import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const { t } = useTranslation(['home', 'contact']);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-section-cool pt-20 pb-16">
      <div className="container-wide px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
            {t('home:contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            {t('home:contact.subtitle', 'Get in touch with us to learn more about our platform.')}
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
