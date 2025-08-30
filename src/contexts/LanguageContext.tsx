import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ja' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'Secure Temporary Email Service',
    
    // Navigation
    'nav.title': 'Site Navigation',
    'nav.home': 'Home',
    'nav.generator': 'Email Generator',
    'nav.privacy': 'Privacy Features',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.quickLinks': 'Quick Links',
    'nav.resources': 'Resources',
    'nav.startNow': 'Start Generating Emails',
    'nav.external.privacy': 'Privacy Policy',
    'nav.external.terms': 'Terms of Service',
    'nav.external.about': 'About Us',
    'nav.external.contact': 'Contact',

    // Email Generator
    'generator.title': 'Generate Temporary Email',
    'generator.description': 'Get a disposable email address instantly. No registration required.',
    'generator.duration': 'Duration',
    'generator.minutes': 'minutes',
    'generator.generate': 'Generate Email',
    'generator.generating': 'Generating...',
    'generator.copy': 'Copy Email',
    'generator.copied': 'Copied!',
    
    // Expiration Timer
    'timer.expires': 'Expires in:',
    
    // Email Inbox
    'inbox.title': 'Your Inbox',
    'inbox.waiting': 'Waiting for emails...',
    'inbox.noEmails': 'No emails received yet. Your temporary email is ready to receive messages.',
    'inbox.viewFull': 'View Full Message',
    'inbox.subject': 'Subject',
    'inbox.from': 'From',
    'inbox.time': 'Time',
    'inbox.fullMessage': 'Full Message',
    
    // Blog Section
    'blog.title': 'Latest Updates',
    'blog.subtitle': 'Stay informed about privacy and email security',
    'blog.readMore': 'Read More',
    'blog.post1.title': 'Why Use Temporary Emails?',
    'blog.post1.excerpt': 'Learn about the benefits of using disposable email addresses for privacy and security.',
    'blog.post2.title': 'Email Privacy Best Practices',
    'blog.post2.excerpt': 'Essential tips to protect your email privacy and avoid spam.',
    'blog.post3.title': 'The Future of Email Security',
    'blog.post3.excerpt': 'Exploring emerging technologies that will shape email security.',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How long do temporary emails last?',
    'faq.a1': 'You can choose the duration when generating your email, from 10 minutes to 1 hour. After expiration, the email and all messages are permanently deleted.',
    'faq.q2': 'Is it really secure and private?',
    'faq.a2': 'Yes! We don\'t store any personal information, and all emails are automatically deleted after expiration. No registration or tracking required.',
    'faq.q3': 'Can I extend the email duration?',
    'faq.a3': 'Currently, you cannot extend the duration once set. You\'ll need to generate a new temporary email if you need more time.',
    'faq.q4': 'What if I don\'t receive emails?',
    'faq.a4': 'Make sure you\'ve copied the correct email address. Some services may block temporary email domains, so this service works best for verification and testing.',
    
    // SEO Content
    'seo.title': 'Why Choose Our Temporary Email Service?',
    'seo.description': 'SnapMailNow provides the most reliable and secure temporary email solution for protecting your privacy online. Our disposable email addresses are perfect for online registrations, email verifications, and protecting your real inbox from spam.',
    'seo.features.instant.title': 'Instant Generation',
    'seo.features.instant.description': 'Generate a temporary email address in seconds. No registration, no forms, just one click and you\'re ready to go.',
    'seo.features.expiring.title': 'Auto-Expiring',
    'seo.features.expiring.description': 'Choose your preferred duration from 10 minutes to 24 hours. Emails automatically delete for maximum privacy.',
    'seo.features.private.title': 'Privacy First',
    'seo.features.private.description': 'Zero personal data collection. We don\'t track, store, or sell your information. Complete anonymity guaranteed.',
    'seo.features.secure.title': 'Secure & Encrypted',
    'seo.features.secure.description': 'All emails are handled with enterprise-grade security. Your temporary inbox is protected and private.',
    'seo.features.fast.title': 'Lightning Fast',
    'seo.features.fast.description': 'Receive emails instantly in your temporary inbox. No delays, no waiting, just immediate email delivery.',
    'seo.features.mobile.title': 'Mobile Optimized',
    'seo.features.mobile.description': 'Perfect experience on all devices. Generate and check emails seamlessly on desktop, tablet, or mobile.',
    'seo.content.whatIs.title': 'What is a Temporary Email Service?',
    'seo.content.whatIs.text': 'A temporary email service provides disposable email addresses that expire after a set time. These emails are perfect for situations where you need to provide an email address but don\'t want to use your personal email. Common use cases include signing up for websites, downloading files, accessing free trials, or any situation where you want to protect your primary email from spam.',
    'seo.content.whyUse.title': 'Why Use Disposable Email Addresses?',
    'seo.content.whyUse.text': 'Disposable emails protect your privacy and keep your main inbox clean. When you use temporary emails for online registrations, you prevent spam, protect against data breaches, and maintain anonymity. Our service ensures that no personal information is required or stored, making it the safest way to handle one-time email needs.',
    'seo.content.howWorks.title': 'How Does Our Service Work?',
    'seo.content.howWorks.text': 'Simply click the generate button to create a unique temporary email address. Choose how long you want it to last, then use it anywhere you need an email. Check your temporary inbox to see received messages. Once the time expires, everything is automatically deleted with no trace left behind.',
    'seo.content.benefits.title': 'Key Benefits of Using Temporary Emails',
    'seo.content.benefits.list.1': 'Protect your personal email from spam and unwanted marketing',
    'seo.content.benefits.list.2': 'Maintain complete anonymity when signing up for services',
    'seo.content.benefits.list.3': 'Avoid data breaches affecting your primary email account',
    'seo.content.benefits.list.4': 'Test websites and services without commitment',
    'seo.content.benefits.list.5': 'Access content that requires email verification quickly',
    
    // Footer
    'footer.privacy': 'Privacy-focused temporary email service • No data stored • Automatically expires',
    'footer.language': 'Language',
  },
  es: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'Servicio de Email Temporal Seguro',
    
    // Email Generator
    'generator.title': 'Generar Email Temporal',
    'generator.description': 'Obtén una dirección de email desechable al instante. No se requiere registro.',
    'generator.duration': 'Duración',
    'generator.minutes': 'minutos',
    'generator.generate': 'Generar Email',
    'generator.generating': 'Generando...',
    'generator.copy': 'Copiar Email',
    'generator.copied': '¡Copiado!',
    
    // Expiration Timer
    'timer.expires': 'Expira en:',
    
    // Email Inbox
    'inbox.title': 'Tu Bandeja de Entrada',
    'inbox.waiting': 'Esperando emails...',
    'inbox.noEmails': 'Aún no se han recibido emails. Tu email temporal está listo para recibir mensajes.',
    'inbox.viewFull': 'Ver Mensaje Completo',
    'inbox.subject': 'Asunto',
    'inbox.from': 'De',
    'inbox.time': 'Hora',
    'inbox.fullMessage': 'Mensaje Completo',
    
    // Blog Section
    'blog.title': 'Últimas Actualizaciones',
    'blog.subtitle': 'Mantente informado sobre privacidad y seguridad del email',
    'blog.readMore': 'Leer Más',
    'blog.post1.title': '¿Por qué usar emails temporales?',
    'blog.post1.excerpt': 'Aprende sobre los beneficios de usar direcciones de email desechables para privacidad y seguridad.',
    'blog.post2.title': 'Mejores Prácticas de Privacidad del Email',
    'blog.post2.excerpt': 'Consejos esenciales para proteger tu privacidad del email y evitar spam.',
    'blog.post3.title': 'El Futuro de la Seguridad del Email',
    'blog.post3.excerpt': 'Explorando tecnologías emergentes que darán forma a la seguridad del email.',
    
    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿Cuánto duran los emails temporales?',
    'faq.a1': 'Puedes elegir la duración al generar tu email, de 10 minutos a 1 hora. Después de la expiración, el email y todos los mensajes se eliminan permanentemente.',
    'faq.q2': '¿Es realmente seguro y privado?',
    'faq.a2': '¡Sí! No almacenamos información personal, y todos los emails se eliminan automáticamente después de la expiración. No se requiere registro o seguimiento.',
    'faq.q3': '¿Puedo extender la duración del email?',
    'faq.a3': 'Actualmente, no puedes extender la duración una vez establecida. Necesitarás generar un nuevo email temporal si necesitas más tiempo.',
    'faq.q4': '¿Qué pasa si no recibo emails?',
    'faq.a4': 'Asegúrate de haber copiado la dirección de email correcta. Algunos servicios pueden bloquear dominios de email temporal, por lo que este servicio funciona mejor para verificación y pruebas.',
    
    // Footer
    'footer.privacy': 'Servicio de email temporal enfocado en privacidad • Sin datos almacenados • Expira automáticamente',
    'footer.language': 'Idioma',
  },
  fr: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'Service d\'Email Temporaire Sécurisé',
    
    // Email Generator
    'generator.title': 'Générer un Email Temporaire',
    'generator.description': 'Obtenez une adresse email jetable instantanément. Aucune inscription requise.',
    'generator.duration': 'Durée',
    'generator.minutes': 'minutes',
    'generator.generate': 'Générer Email',
    'generator.generating': 'Génération...',
    'generator.copy': 'Copier Email',
    'generator.copied': 'Copié!',
    
    // Expiration Timer
    'timer.expires': 'Expire dans:',
    
    // Email Inbox
    'inbox.title': 'Votre Boîte de Réception',
    'inbox.waiting': 'En attente d\'emails...',
    'inbox.noEmails': 'Aucun email reçu pour le moment. Votre email temporaire est prêt à recevoir des messages.',
    'inbox.viewFull': 'Voir le Message Complet',
    'inbox.subject': 'Sujet',
    'inbox.from': 'De',
    'inbox.time': 'Heure',
    'inbox.fullMessage': 'Message Complet',
    
    // Blog Section
    'blog.title': 'Dernières Mises à Jour',
    'blog.subtitle': 'Restez informé sur la confidentialité et la sécurité des emails',
    'blog.readMore': 'Lire Plus',
    'blog.post1.title': 'Pourquoi utiliser des emails temporaires?',
    'blog.post1.excerpt': 'Découvrez les avantages d\'utiliser des adresses email jetables pour la confidentialité et la sécurité.',
    'blog.post2.title': 'Meilleures Pratiques de Confidentialité Email',
    'blog.post2.excerpt': 'Conseils essentiels pour protéger votre confidentialité email et éviter le spam.',
    'blog.post3.title': 'L\'Avenir de la Sécurité Email',
    'blog.post3.excerpt': 'Explorer les technologies émergentes qui façonneront la sécurité des emails.',
    
    // FAQ Section
    'faq.title': 'Questions Fréquemment Posées',
    'faq.q1': 'Combien de temps durent les emails temporaires?',
    'faq.a1': 'Vous pouvez choisir la durée lors de la génération de votre email, de 10 minutes à 1 heure. Après expiration, l\'email et tous les messages sont définitivement supprimés.',
    'faq.q2': 'Est-ce vraiment sécurisé et privé?',
    'faq.a2': 'Oui! Nous ne stockons aucune information personnelle, et tous les emails sont automatiquement supprimés après expiration. Aucune inscription ou suivi requis.',
    'faq.q3': 'Puis-je prolonger la durée de l\'email?',
    'faq.a3': 'Actuellement, vous ne pouvez pas prolonger la durée une fois définie. Vous devrez générer un nouvel email temporaire si vous avez besoin de plus de temps.',
    'faq.q4': 'Et si je ne reçois pas d\'emails?',
    'faq.a4': 'Assurez-vous d\'avoir copié la bonne adresse email. Certains services peuvent bloquer les domaines d\'email temporaire, donc ce service fonctionne mieux pour la vérification et les tests.',
    
    // Footer
    'footer.privacy': 'Service d\'email temporaire axé sur la confidentialité • Aucune donnée stockée • Expire automatiquement',
    'footer.language': 'Langue',
  },
  de: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'Sicherer Temporärer E-Mail-Service',
    
    // Email Generator
    'generator.title': 'Temporäre E-Mail Generieren',
    'generator.description': 'Erhalten Sie sofort eine Wegwerf-E-Mail-Adresse. Keine Registrierung erforderlich.',
    'generator.duration': 'Dauer',
    'generator.minutes': 'Minuten',
    'generator.generate': 'E-Mail Generieren',
    'generator.generating': 'Generiere...',
    'generator.copy': 'E-Mail Kopieren',
    'generator.copied': 'Kopiert!',
    
    // Expiration Timer
    'timer.expires': 'Läuft ab in:',
    
    // Email Inbox
    'inbox.title': 'Ihr Posteingang',
    'inbox.waiting': 'Warte auf E-Mails...',
    'inbox.noEmails': 'Noch keine E-Mails erhalten. Ihre temporäre E-Mail ist bereit, Nachrichten zu empfangen.',
    'inbox.viewFull': 'Vollständige Nachricht Anzeigen',
    'inbox.subject': 'Betreff',
    'inbox.from': 'Von',
    'inbox.time': 'Zeit',
    'inbox.fullMessage': 'Vollständige Nachricht',
    
    // Blog Section
    'blog.title': 'Neueste Updates',
    'blog.subtitle': 'Bleiben Sie über Datenschutz und E-Mail-Sicherheit informiert',
    'blog.readMore': 'Mehr Lesen',
    'blog.post1.title': 'Warum temporäre E-Mails verwenden?',
    'blog.post1.excerpt': 'Erfahren Sie mehr über die Vorteile der Verwendung von Wegwerf-E-Mail-Adressen für Datenschutz und Sicherheit.',
    'blog.post2.title': 'Best Practices für E-Mail-Datenschutz',
    'blog.post2.excerpt': 'Wichtige Tipps zum Schutz Ihrer E-Mail-Privatsphäre und zur Vermeidung von Spam.',
    'blog.post3.title': 'Die Zukunft der E-Mail-Sicherheit',
    'blog.post3.excerpt': 'Erkundung aufkommender Technologien, die die E-Mail-Sicherheit prägen werden.',
    
    // FAQ Section
    'faq.title': 'Häufig Gestellte Fragen',
    'faq.q1': 'Wie lange halten temporäre E-Mails?',
    'faq.a1': 'Sie können die Dauer beim Generieren Ihrer E-Mail wählen, von 10 Minuten bis 1 Stunde. Nach Ablauf werden die E-Mail und alle Nachrichten dauerhaft gelöscht.',
    'faq.q2': 'Ist es wirklich sicher und privat?',
    'faq.a2': 'Ja! Wir speichern keine persönlichen Informationen, und alle E-Mails werden nach Ablauf automatisch gelöscht. Keine Registrierung oder Verfolgung erforderlich.',
    'faq.q3': 'Kann ich die E-Mail-Dauer verlängern?',
    'faq.a3': 'Derzeit können Sie die Dauer nicht verlängern, sobald sie festgelegt ist. Sie müssen eine neue temporäre E-Mail generieren, wenn Sie mehr Zeit benötigen.',
    'faq.q4': 'Was ist, wenn ich keine E-Mails erhalte?',
    'faq.a4': 'Stellen Sie sicher, dass Sie die richtige E-Mail-Adresse kopiert haben. Einige Dienste blockieren möglicherweise temporäre E-Mail-Domains, daher funktioniert dieser Service am besten für Verifizierung und Tests.',
    
    // Footer
    'footer.privacy': 'Datenschutzorientierter temporärer E-Mail-Service • Keine Daten gespeichert • Läuft automatisch ab',
    'footer.language': 'Sprache',
  },
  it: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'Servizio Email Temporaneo Sicuro',
    
    // Email Generator
    'generator.title': 'Genera Email Temporanea',
    'generator.description': 'Ottieni un indirizzo email usa e getta istantaneamente. Nessuna registrazione richiesta.',
    'generator.duration': 'Durata',
    'generator.minutes': 'minuti',
    'generator.generate': 'Genera Email',
    'generator.generating': 'Generando...',
    'generator.copy': 'Copia Email',
    'generator.copied': 'Copiato!',
    
    // Expiration Timer
    'timer.expires': 'Scade tra:',
    
    // Email Inbox
    'inbox.title': 'La Tua Casella di Posta',
    'inbox.waiting': 'In attesa di email...',
    'inbox.noEmails': 'Nessuna email ricevuta ancora. La tua email temporanea è pronta a ricevere messaggi.',
    'inbox.viewFull': 'Visualizza Messaggio Completo',
    'inbox.subject': 'Oggetto',
    'inbox.from': 'Da',
    'inbox.time': 'Ora',
    'inbox.fullMessage': 'Messaggio Completo',
    
    // Blog Section
    'blog.title': 'Ultimi Aggiornamenti',
    'blog.subtitle': 'Rimani informato su privacy e sicurezza email',
    'blog.readMore': 'Leggi di Più',
    'blog.post1.title': 'Perché usare email temporanee?',
    'blog.post1.excerpt': 'Scopri i vantaggi dell\'utilizzo di indirizzi email usa e getta per privacy e sicurezza.',
    'blog.post2.title': 'Migliori Pratiche per la Privacy Email',
    'blog.post2.excerpt': 'Consigli essenziali per proteggere la tua privacy email ed evitare spam.',
    'blog.post3.title': 'Il Futuro della Sicurezza Email',
    'blog.post3.excerpt': 'Esplorare le tecnologie emergenti che plasmeranno la sicurezza email.',
    
    // FAQ Section
    'faq.title': 'Domande Frequenti',
    'faq.q1': 'Quanto durano le email temporanee?',
    'faq.a1': 'Puoi scegliere la durata quando generi la tua email, da 10 minuti a 1 ora. Dopo la scadenza, l\'email e tutti i messaggi vengono eliminati permanentemente.',
    'faq.q2': 'È davvero sicuro e privato?',
    'faq.a2': 'Sì! Non memorizziamo informazioni personali, e tutte le email vengono eliminate automaticamente dopo la scadenza. Nessuna registrazione o tracciamento richiesto.',
    'faq.q3': 'Posso estendere la durata dell\'email?',
    'faq.a3': 'Attualmente, non puoi estendere la durata una volta impostata. Dovrai generare una nuova email temporanea se hai bisogno di più tempo.',
    'faq.q4': 'E se non ricevo email?',
    'faq.a4': 'Assicurati di aver copiato l\'indirizzo email corretto. Alcuni servizi potrebbero bloccare i domini email temporanei, quindi questo servizio funziona meglio per verifica e test.',
    
    // Footer
    'footer.privacy': 'Servizio email temporaneo focalizzato sulla privacy • Nessun dato memorizzato • Scade automaticamente',
    'footer.language': 'Lingua',
  },
  pt: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'Serviço de Email Temporário Seguro',
    
    // Email Generator
    'generator.title': 'Gerar Email Temporário',
    'generator.description': 'Obtenha um endereço de email descartável instantaneamente. Nenhum cadastro necessário.',
    'generator.duration': 'Duração',
    'generator.minutes': 'minutos',
    'generator.generate': 'Gerar Email',
    'generator.generating': 'Gerando...',
    'generator.copy': 'Copiar Email',
    'generator.copied': 'Copiado!',
    
    // Expiration Timer
    'timer.expires': 'Expira em:',
    
    // Email Inbox
    'inbox.title': 'Sua Caixa de Entrada',
    'inbox.waiting': 'Aguardando emails...',
    'inbox.noEmails': 'Nenhum email recebido ainda. Seu email temporário está pronto para receber mensagens.',
    'inbox.viewFull': 'Ver Mensagem Completa',
    'inbox.subject': 'Assunto',
    'inbox.from': 'De',
    'inbox.time': 'Hora',
    'inbox.fullMessage': 'Mensagem Completa',
    
    // Blog Section
    'blog.title': 'Últimas Atualizações',
    'blog.subtitle': 'Mantenha-se informado sobre privacidade e segurança de email',
    'blog.readMore': 'Ler Mais',
    'blog.post1.title': 'Por que usar emails temporários?',
    'blog.post1.excerpt': 'Aprenda sobre os benefícios de usar endereços de email descartáveis para privacidade e segurança.',
    'blog.post2.title': 'Melhores Práticas de Privacidade de Email',
    'blog.post2.excerpt': 'Dicas essenciais para proteger sua privacidade de email e evitar spam.',
    'blog.post3.title': 'O Futuro da Segurança de Email',
    'blog.post3.excerpt': 'Explorando tecnologias emergentes que moldarão a segurança de email.',
    
    // FAQ Section
    'faq.title': 'Perguntas Frequentes',
    'faq.q1': 'Quanto tempo duram os emails temporários?',
    'faq.a1': 'Você pode escolher a duração ao gerar seu email, de 10 minutos a 1 hora. Após a expiração, o email e todas as mensagens são permanentemente deletados.',
    'faq.q2': 'É realmente seguro e privado?',
    'faq.a2': 'Sim! Não armazenamos informações pessoais, e todos os emails são automaticamente deletados após a expiração. Nenhum cadastro ou rastreamento necessário.',
    'faq.q3': 'Posso estender a duração do email?',
    'faq.a3': 'Atualmente, você não pode estender a duração uma vez definida. Você precisará gerar um novo email temporário se precisar de mais tempo.',
    'faq.q4': 'E se eu não receber emails?',
    'faq.a4': 'Certifique-se de ter copiado o endereço de email correto. Alguns serviços podem bloquear domínios de email temporário, então este serviço funciona melhor para verificação e testes.',
    
    // Footer
    'footer.privacy': 'Serviço de email temporário focado em privacidade • Nenhum dado armazenado • Expira automaticamente',
    'footer.language': 'Idioma',
  },
  ru: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'Безопасный Сервис Временной Электронной Почты',
    
    // Email Generator
    'generator.title': 'Создать Временную Почту',
    'generator.description': 'Получите одноразовый адрес электронной почты мгновенно. Регистрация не требуется.',
    'generator.duration': 'Длительность',
    'generator.minutes': 'минут',
    'generator.generate': 'Создать Почту',
    'generator.generating': 'Создание...',
    'generator.copy': 'Копировать Почту',
    'generator.copied': 'Скопировано!',
    
    // Expiration Timer
    'timer.expires': 'Истекает через:',
    
    // Email Inbox
    'inbox.title': 'Ваш Почтовый Ящик',
    'inbox.waiting': 'Ожидание писем...',
    'inbox.noEmails': 'Писем пока не получено. Ваша временная почта готова получать сообщения.',
    'inbox.viewFull': 'Посмотреть Полное Сообщение',
    'inbox.subject': 'Тема',
    'inbox.from': 'От',
    'inbox.time': 'Время',
    'inbox.fullMessage': 'Полное Сообщение',
    
    // Blog Section
    'blog.title': 'Последние Обновления',
    'blog.subtitle': 'Будьте в курсе вопросов конфиденциальности и безопасности электронной почты',
    'blog.readMore': 'Читать Далее',
    'blog.post1.title': 'Зачем использовать временную почту?',
    'blog.post1.excerpt': 'Узнайте о преимуществах использования одноразовых адресов электронной почты для конфиденциальности и безопасности.',
    'blog.post2.title': 'Лучшие Практики Конфиденциальности Почты',
    'blog.post2.excerpt': 'Важные советы для защиты конфиденциальности вашей электронной почты и избежания спама.',
    'blog.post3.title': 'Будущее Безопасности Электронной Почты',
    'blog.post3.excerpt': 'Изучение новых технологий, которые будут формировать безопасность электронной почты.',
    
    // FAQ Section
    'faq.title': 'Часто Задаваемые Вопросы',
    'faq.q1': 'Как долго действуют временные почты?',
    'faq.a1': 'Вы можете выбрать длительность при создании почты, от 10 минут до 1 часа. После истечения срока почта и все сообщения удаляются навсегда.',
    'faq.q2': 'Это действительно безопасно и конфиденциально?',
    'faq.a2': 'Да! Мы не храним личную информацию, и все письма автоматически удаляются после истечения срока. Регистрация или отслеживание не требуется.',
    'faq.q3': 'Могу ли я продлить срок действия почты?',
    'faq.a3': 'В настоящее время вы не можете продлить срок после его установки. Вам нужно будет создать новую временную почту, если потребуется больше времени.',
    'faq.q4': 'Что делать, если я не получаю письма?',
    'faq.a4': 'Убедитесь, что вы скопировали правильный адрес электронной почты. Некоторые сервисы могут блокировать домены временной почты, поэтому этот сервис лучше всего работает для проверки и тестирования.',
    
    // Footer
    'footer.privacy': 'Сервис временной почты, ориентированный на конфиденциальность • Данные не сохраняются • Автоматически истекает',
    'footer.language': 'Язык',
  },
  zh: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': '安全临时邮箱服务',
    
    // Email Generator
    'generator.title': '生成临时邮箱',
    'generator.description': '立即获取一次性邮箱地址。无需注册。',
    'generator.duration': '时长',
    'generator.minutes': '分钟',
    'generator.generate': '生成邮箱',
    'generator.generating': '生成中...',
    'generator.copy': '复制邮箱',
    'generator.copied': '已复制！',
    
    // Expiration Timer
    'timer.expires': '到期时间：',
    
    // Email Inbox
    'inbox.title': '您的收件箱',
    'inbox.waiting': '等待邮件中...',
    'inbox.noEmails': '暂未收到邮件。您的临时邮箱已准备好接收消息。',
    'inbox.viewFull': '查看完整消息',
    'inbox.subject': '主题',
    'inbox.from': '发件人',
    'inbox.time': '时间',
    'inbox.fullMessage': '完整消息',
    
    // Blog Section
    'blog.title': '最新更新',
    'blog.subtitle': '了解隐私和邮箱安全信息',
    'blog.readMore': '阅读更多',
    'blog.post1.title': '为什么使用临时邮箱？',
    'blog.post1.excerpt': '了解使用一次性邮箱地址保护隐私和安全的好处。',
    'blog.post2.title': '邮箱隐私最佳实践',
    'blog.post2.excerpt': '保护您的邮箱隐私和避免垃圾邮件的重要提示。',
    'blog.post3.title': '邮箱安全的未来',
    'blog.post3.excerpt': '探索将塑造邮箱安全的新兴技术。',
    
    // FAQ Section
    'faq.title': '常见问题',
    'faq.q1': '临时邮箱能使用多长时间？',
    'faq.a1': '您可以在生成邮箱时选择时长，从10分钟到1小时。到期后，邮箱和所有消息将被永久删除。',
    'faq.q2': '真的安全和私密吗？',
    'faq.a2': '是的！我们不存储任何个人信息，所有邮件在到期后自动删除。无需注册或跟踪。',
    'faq.q3': '我可以延长邮箱使用时间吗？',
    'faq.a3': '目前，您无法在设置后延长时间。如果需要更多时间，您需要生成新的临时邮箱。',
    'faq.q4': '如果我收不到邮件怎么办？',
    'faq.a4': '确保您复制了正确的邮箱地址。某些服务可能会阻止临时邮箱域名，因此此服务最适合用于验证和测试。',
    
    // Footer
    'footer.privacy': '注重隐私的临时邮箱服务 • 不存储数据 • 自动到期',
    'footer.language': '语言',
  },
  ja: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'セキュアな一時メールサービス',
    
    // Email Generator
    'generator.title': '一時メール生成',
    'generator.description': '使い捨てメールアドレスを即座に取得。登録不要。',
    'generator.duration': '期間',
    'generator.minutes': '分',
    'generator.generate': 'メール生成',
    'generator.generating': '生成中...',
    'generator.copy': 'メールをコピー',
    'generator.copied': 'コピーしました！',
    
    // Expiration Timer
    'timer.expires': '有効期限：',
    
    // Email Inbox
    'inbox.title': '受信箱',
    'inbox.waiting': 'メール待機中...',
    'inbox.noEmails': 'まだメールを受信していません。一時メールはメッセージを受信する準備ができています。',
    'inbox.viewFull': '完全なメッセージを表示',
    'inbox.subject': '件名',
    'inbox.from': '送信者',
    'inbox.time': '時間',
    'inbox.fullMessage': '完全なメッセージ',
    
    // Blog Section
    'blog.title': '最新情報',
    'blog.subtitle': 'プライバシーとメールセキュリティについて最新情報を入手',
    'blog.readMore': '続きを読む',
    'blog.post1.title': 'なぜ一時メールを使うのか？',
    'blog.post1.excerpt': 'プライバシーとセキュリティのために使い捨てメールアドレスを使用する利点について学びます。',
    'blog.post2.title': 'メールプライバシーのベストプラクティス',
    'blog.post2.excerpt': 'メールプライバシーを保護し、スパムを避けるための重要なヒント。',
    'blog.post3.title': 'メールセキュリティの未来',
    'blog.post3.excerpt': 'メールセキュリティを形作る新興技術の探求。',
    
    // FAQ Section
    'faq.title': 'よくある質問',
    'faq.q1': '一時メールはどのくらい持続しますか？',
    'faq.a1': 'メール生成時に10分から1時間の期間を選択できます。期限後、メールとすべてのメッセージが完全に削除されます。',
    'faq.q2': '本当に安全でプライベートですか？',
    'faq.a2': 'はい！個人情報は保存せず、すべてのメールは期限後に自動削除されます。登録や追跡は不要です。',
    'faq.q3': 'メールの期間を延長できますか？',
    'faq.a3': '現在、設定後に期間を延長することはできません。より多くの時間が必要な場合は、新しい一時メールを生成する必要があります。',
    'faq.q4': 'メールが届かない場合はどうすればよいですか？',
    'faq.a4': '正しいメールアドレスをコピーしたことを確認してください。一部のサービスは一時メールドメインをブロックする可能性があるため、このサービスは検証とテストに最適です。',
    
    // Footer
    'footer.privacy': 'プライバシー重視の一時メールサービス • データ保存なし • 自動期限切れ',
    'footer.language': '言語',
  },
  ar: {
    // Header
    'header.title': 'TempMail',
    'header.subtitle': 'خدمة البريد الإلكتروني المؤقت الآمن',
    
    // Email Generator
    'generator.title': 'إنشاء بريد إلكتروني مؤقت',
    'generator.description': 'احصل على عنوان بريد إلكتروني يمكن التخلص منه على الفور. لا حاجة للتسجيل.',
    'generator.duration': 'المدة',
    'generator.minutes': 'دقائق',
    'generator.generate': 'إنشاء البريد الإلكتروني',
    'generator.generating': 'جاري الإنشاء...',
    'generator.copy': 'نسخ البريد الإلكتروني',
    'generator.copied': 'تم النسخ!',
    
    // Expiration Timer
    'timer.expires': 'ينتهي في:',
    
    // Email Inbox
    'inbox.title': 'صندوق الوارد',
    'inbox.waiting': 'في انتظار الرسائل...',
    'inbox.noEmails': 'لم يتم استلام أي رسائل بعد. بريدك المؤقت جاهز لاستقبال الرسائل.',
    'inbox.viewFull': 'عرض الرسالة كاملة',
    'inbox.subject': 'الموضوع',
    'inbox.from': 'من',
    'inbox.time': 'الوقت',
    'inbox.fullMessage': 'الرسالة كاملة',
    
    // Blog Section
    'blog.title': 'آخر التحديثات',
    'blog.subtitle': 'ابق على اطلاع حول الخصوصية وأمان البريد الإلكتروني',
    'blog.readMore': 'اقرأ المزيد',
    'blog.post1.title': 'لماذا استخدام البريد الإلكتروني المؤقت؟',
    'blog.post1.excerpt': 'تعرف على فوائد استخدام عناوين البريد الإلكتروني التي يمكن التخلص منها للخصوصية والأمان.',
    'blog.post2.title': 'أفضل ممارسات خصوصية البريد الإلكتروني',
    'blog.post2.excerpt': 'نصائح أساسية لحماية خصوصية بريدك الإلكتروني وتجنب الرسائل غير المرغوبة.',
    'blog.post3.title': 'مستقبل أمان البريد الإلكتروني',
    'blog.post3.excerpt': 'استكشاف التقنيات الناشئة التي ستشكل أمان البريد الإلكتروني.',
    
    // FAQ Section
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'كم تدوم رسائل البريد الإلكتروني المؤقتة؟',
    'faq.a1': 'يمكنك اختيار المدة عند إنشاء بريدك الإلكتروني، من 10 دقائق إلى ساعة واحدة. بعد انتهاء الصلاحية، يتم حذف البريد الإلكتروني وجميع الرسائل نهائياً.',
    'faq.q2': 'هل هو آمن وخاص حقاً؟',
    'faq.a2': 'نعم! نحن لا نخزن أي معلومات شخصية، وجميع رسائل البريد الإلكتروني تُحذف تلقائياً بعد انتهاء الصلاحية. لا حاجة للتسجيل أو التتبع.',
    'faq.q3': 'هل يمكنني تمديد مدة البريد الإلكتروني؟',
    'faq.a3': 'حالياً، لا يمكنك تمديد المدة بمجرد تعيينها. ستحتاج إلى إنشاء بريد إلكتروني مؤقت جديد إذا كنت بحاجة لمزيد من الوقت.',
    'faq.q4': 'ماذا لو لم أستلم رسائل إلكترونية؟',
    'faq.a4': 'تأكد من أنك نسخت عنوان البريد الإلكتروني الصحيح. قد تحجب بعض الخدمات نطاقات البريد الإلكتروني المؤقت، لذا تعمل هذه الخدمة بشكل أفضل للتحقق والاختبار.',
    
    // Footer
    'footer.privacy': 'خدمة البريد الإلكتروني المؤقت التي تركز على الخصوصية • لا توجد بيانات مخزنة • تنتهي تلقائياً',
    'footer.language': 'اللغة',
  },
};