import React from "react";
import { Sparkles, MessageCircle, ShieldCheck, Gauge } from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-badge">
            <div className="brand-badge-inner">AI</div>
          </div>
          <div>
            <div className="brand-text-main">Solutions AI de Prestige</div>
            <div className="brand-text-sub">Chatbot sur mesure</div>
          </div>
        </div>
        <div className="header-pill">
          <span className="header-pill-dot" />
          <span>Disponible 24/7 pour vos clients</span>
        </div>
      </header>

      <main className="layout">
        <section>
          <h1 className="hero-title">
            Votre <span className="hero-title-highlight">chatbot haut de gamme</span>{" "}
            qui répond comme un expert de votre entreprise.
          </h1>

          <p className="hero-subtitle">
            Offrez à vos clients des réponses claires, rapides et professionnelles,{" "}
            entraînées sur vos propres documents, vos procédures internes et votre ton de marque.{" "}
            <strong>Sans blabla technique, sans prise de tête.</strong>
          </p>

          <div className="hero-actions">
            <button className="button-primary" type="button">
              <Sparkles size={16} />
              Lancer une démo guidée
            </button>
            <button className="button-secondary" type="button">
              <MessageCircle size={14} />
              Parler à un humain
            </button>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-badge">
              <ShieldCheck size={12} />
              Données hébergées de façon sécurisée
            </span>
            <span>
              <Gauge size={12} />
              Temps de réponse moyen &lt; 2 secondes
            </span>
            <span>Intégration: site web, Messenger, WhatsApp, et plus.</span>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <h2 className="feature-title">Entièrement personnalisé</h2>
              <p className="feature-text">
                Le chatbot est formé sur vos PDF, vos FAQ, vos procédures et votre style de
                communication. Il répond comme votre meilleur employé, mais sans se fatiguer.
              </p>
            </article>
            <article className="feature-card">
              <h2 className="feature-title">Installation clé en main</h2>
              <p className="feature-text">
                On s&apos;occupe de tout: connexion à votre site web, configuration, tests et
                ajustements. Vous n&apos;avez qu&apos;un lien ou un script à coller.
              </p>
            </article>
            <article className="feature-card">
              <h2 className="feature-title">Suivi précis des conversations</h2>
              <p className="feature-text">
                Tableau de bord avec les questions fréquentes, les heures de pointe et les
                conversations transférées vers votre équipe.
              </p>
            </article>
          </div>

          <p className="small-muted">
            Prêt à démarrer? Commencez par une démo gratuite avec vos vraies questions clients
            et voyez le résultat avant de vous engager.
          </p>
        </section>

        <section>
          <div className="chat-card" aria-label="Aperçu du chatbot en action">
            <div className="chat-header">
              <div className="chat-header-title">
                <span>Chatbot – Solutions AI de Prestige</span>
                <span>Formation sur vos documents, en français et en anglais.</span>
              </div>
              <div className="chat-header-status">
                <span className="header-pill-dot" />
                <span>En ligne</span>
              </div>
            </div>

            <div className="chat-messages">
              <div className="chat-message system">
                Exemple de conversation réelle avec vos clients
              </div>

              <div className="chat-message user">
                Bonjour! Comment fonctionne votre service de chatbot personnalisé?
              </div>

              <div className="chat-message assistant">
                Bonjour! Notre équipe commence par analyser vos besoins (volume de demandes,
                canaux, langue, ton). Ensuite, on entraîne un chatbot sur mesure à partir de
                vos documents (PDF, procédures, courriels type, site web).<br />
                <br />
                Vous obtenez:
                <br />• Réponses automatiques cohérentes avec votre façon de travailler
                <br />• Transfert vers un humain dès que nécessaire
                <br />• Un tableau de bord simple pour suivre les résultats
              </div>

              <div className="chat-message user">
                Est-ce que je peux l&apos;intégrer sur mon site web existant?
              </div>

              <div className="chat-message assistant">
                Absolument. Vous avez simplement un petit code à ajouter sur votre site (comme
                Google Analytics). On peut aussi l&apos;intégrer à Facebook Messenger, WhatsApp
                et d&apos;autres canaux selon vos besoins.
              </div>
            </div>

            <form
              className="chat-input"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input placeholder="Posez une question comme si vous étiez un de vos clients..." />
              <button className="chat-input-button" type="submit" aria-label="Envoyer">
                ↗
              </button>
            </form>

            <div className="chat-footer">
              <span>Démo illustrée – pas de données réelles affichées.</span>
              <span>Prêt à tester avec vos propres documents? Contactez-nous.</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
