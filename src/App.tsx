import { useState, useEffect } from "react";
import heroImage from "./assets/images/regenerated_image_1778281041242.png";
import offerImage from "./assets/images/regenerated_image_1778285962112.jpg";
import bonusImage1 from "./assets/images/regenerated_image_1778282640598.png";
import bonusImage2 from "./assets/images/regenerated_image_1778282897792.png";
import sacroCoracaoImage from "./assets/images/regenerated_image_1778846406184.png";
import nossaSenhoraImage from "./assets/images/regenerated_image_1778810183846.jpg";
import { 
  Check, 
  ChevronDown, 
  X,
  Star, 
  ArrowRight, 
  Printer, 
  Layout, 
  Infinity, 
  Download,
  ShieldCheck,
  Facebook,
  Instagram,
  Mail,
  MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Button = ({ children, className = "", primary = true, ...props }: any) => {
  const baseClass = "px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2";
  const themeClass = primary 
    ? "bg-gold-gradient text-white hover:shadow-gold/40" 
    : "bg-white text-burgundy border-2 border-burgundy hover:bg-cream";
  
  return (
    <button className={`${baseClass} ${themeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionTitle = ({ children, centered = true }: any) => (
  <h2 className={`text-4xl md:text-5xl font-black mb-12 text-burgundy leading-tight ${centered ? 'text-center' : ''}`}>
    {children}
  </h2>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-3xl shadow-lg border border-burgundy/5 flex flex-col items-center text-center"
  >
    <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mb-4 text-burgundy">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-burgundy/70 leading-relaxed font-medium">{description}</p>
  </motion.div>
);

const BonusCard = ({ title, description, image, price, originalPrice }: any) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white p-0 rounded-3xl shadow-xl border-2 border-gold relative overflow-hidden flex flex-col"
  >
    {image && (
      <div className="w-full aspect-[16/10] overflow-hidden bg-cream border-b border-gold/10 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    )}

    <div className="p-6">
      <div className="flex items-center gap-4 mb-4 bg-gold/5 p-3 rounded-2xl border border-gold/10">
        <div className="bg-gold text-white px-3 py-1.5 rounded-xl shadow-sm flex flex-col items-center justify-center shrink-0">
          {price ? (
            <>
              {originalPrice && <span className="text-[9px] leading-none line-through text-white/70 font-bold mb-1">{originalPrice}</span>}
              <span className="text-lg leading-none font-black italic">{price}</span>
            </>
          ) : (
            <>
              <span className="text-[9px] leading-none line-through text-white/70 font-bold mb-1">R$ 19,90</span>
              <span className="text-lg leading-none font-black italic">GRÁTIS</span>
            </>
          )}
        </div>
        <p className="text-gold font-bold text-[11px] uppercase tracking-wider">
          {price ? (originalPrice ? "Aproveite esta oferta" : "Valor individual") : "Economize 100% agora"}
        </p>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-gold/10 p-2 rounded-full text-gold shrink-0">
          <Check size={18} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-burgundy/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, location, text }: any) => (
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-burgundy/5">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#d4af37" color="#d4af37" />)}
    </div>
    <p className="text-lg italic text-burgundy/80 mb-8 leading-relaxed">"{text}"</p>
    <div>
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-sm text-burgundy/60">{role} — {location}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-burgundy/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-gold transition-colors"
      >
        <span className="text-xl font-bold pr-8">{question}</span>
        <ChevronDown size={24} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-burgundy/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white overflow-x-hidden text-burgundy">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-burgundy/10 text-burgundy px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-burgundy/20">
            Para Comunidades Católicas
          </span>
          <h1 className="text-[38px] font-black mb-8 leading-[45px] max-w-5xl mx-auto text-burgundy">
            Transforme as ruas da sua paróquia com <span className="text-burgundy">+100 moldes</span> prontos para imprimir
          </h1>
          <p className="text-xl md:text-2xl text-burgundy/70 max-w-3xl mx-auto leading-relaxed mb-10">
            O maior acervo de moldes para tapetes de Corpus Christi, pronto para uso.
          </p>
        </motion.div>

        {/* Hero Image Mockup */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <img 
              src={heroImage} 
              alt="Pack +100 Moldes Corpus Christi" 
              className="w-full h-auto rounded-[2rem] shadow-2xl border-4 border-gold/20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -inset-4 bg-gold/10 blur-3xl -z-10 rounded-full"></div>
          </motion.div>
        </div>

        {/* White Offer Card */}
        <div className="relative max-w-[310px] mx-auto mb-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-burgundy/5 text-center"
          >
            <p className="text-burgundy/80 text-lg font-medium leading-relaxed mb-8">
              +100 moldes prontos de símbolos de Corpus Christi para imprimir e usar como guia no chão.
            </p>

            <div className="flex justify-center mb-8">
              <Button 
                onClick={scrollToPlanos}
                className="w-full uppercase tracking-wide py-4 px-6 text-sm shadow-gold-xl"
              >
                QUERO GARANTIR
              </Button>
            </div>

            <div className="space-y-3 mb-6 inline-block text-left mx-auto">
              {[
                "Prontos para imprimir",
                "Guia direto no chão",
                "Facilita a montagem",
                "Não precisa desenhar"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-success" size={18} strokeWidth={3} />
                  <span className="text-sm font-bold text-burgundy/90">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-burgundy/50 text-base leading-relaxed mt-10">
              Voce recebe tudo na hora, direto no seu e-mail.<br/>
              E so imprimir e usar.
            </p>
          </motion.div>
          
          {/* Subtle reflection under box */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-burgundy/5 blur-2xl -mb-6"></div>
        </div>

      </section>

      {/* Preview Section */}
      <section className="bg-white pt-0 pb-8 px-6 relative">
        <div className="max-w-7xl mx-auto font-sans">
          <SectionTitle>Veja alguns dos +100 moldes inclusos</SectionTitle>
          
          <div className="max-w-[220px] mx-auto">
            <div className="relative">
              <div className="aspect-square flex items-center justify-center relative overflow-hidden group">
                <img 
                  src={sacroCoracaoImage} 
                  alt="Molde Sacro Coração"
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-xl mx-auto bg-cream p-6 rounded-2xl flex items-center gap-6 border border-burgundy/10">
            <div className="bg-white p-3 rounded-xl shadow-sm text-burgundy">
              <Download size={24} />
            </div>
            <div>
              <h5 className="font-bold text-lg">Acesso imediato via PDF</h5>
              <p className="text-burgundy/60 font-medium">Baixe no celular ou computador</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto font-sans">
        <SectionTitle>Tudo que você precisa para criar tapetes incríveis</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Printer}
            title="Impressão Facilitada"
            description="Todos os moldes em formato A4 e Pôster, prontos para imprimir em casa ou gráfica."
          />
          <FeatureCard 
            icon={Layout}
            title="Variedade Total"
            description="Símbolos eucarísticos, santos, frases litúrgicas e bordas decorativas para todos os gostos."
          />
          <FeatureCard 
            icon={Infinity}
            title="Acesso Vitalício"
            description="Compre uma vez e use todos os anos. Seu pack nunca expira."
          />
        </div>
      </section>

      {/* Bonus Area */}
      <section className="bg-burgundy/5 pt-16 pb-24 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Bônus exclusivos inclusos no pack</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <BonusCard 
              title="Guia de Materiais e Cores"
              description="Descubra os melhores materiais, tintas e serragem colorida para tapetes deslumbrantes. Guia completo em PDF."
              image={bonusImage1}
              price="R$ 4,00"
              originalPrice="R$ 15,00"
            />
            <BonusCard 
              title="Checklist de Organização"
              description="Inclui dois checklists completos para planejar sua festa do Corpus Christi sem stress. Cronograma completo da preparação ao tapete pronto."
              image={bonusImage2}
              price="R$ 3,00"
              originalPrice="R$ 10,00"
            />
          </div>
          
          <div id="planos" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch scroll-mt-10 md:scroll-mt-20">
            {/* Plano Básico */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white border-2 border-burgundy/10 rounded-[3rem] p-10 text-center text-burgundy shadow-xl relative overflow-hidden flex flex-col"
            >
              <div className="relative z-10 flex flex-col h-full">
                <span className="bg-burgundy/5 text-burgundy px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-center">Econômico</span>
                <h2 className="text-3xl font-black mb-6">Plano Básico</h2>
                
                <div className="mb-8 max-w-[200px] mx-auto opacity-80">
                  <img 
                    src={offerImage} 
                    alt="Pack +100 Moldes Corpus Christi" 
                    className="w-full h-auto rounded-xl shadow-md border border-burgundy/10"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <ul className="text-left space-y-4 mb-10 flex-grow max-w-[240px] mx-auto w-full">
                  <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-burgundy" /> +100 Moldes Prontos</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-burgundy" /> Acesso Vitalício</li>
                  <li className="flex items-center gap-3 text-sm font-medium opacity-30"><Check size={16} className="text-burgundy" /> <span className="line-through">Bônus Exclusivos</span></li>
                </ul>

                <div className="mb-8">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-burgundy/40 line-through text-sm font-medium">De R$ 27,90</span>
                    <div className="text-burgundy font-black text-5xl leading-none">
                      R$ 9,90
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => window.open("https://pay.wiapy.com/AMO9xZ_I-4", "_blank")}
                  className="w-full uppercase tracking-tighter py-6 px-8 text-lg hover:bg-burgundy hover:text-white bg-transparent border-2 border-burgundy text-burgundy shadow-none"
                >
                  Escolher Plano Básico
                </Button>
              </div>
            </motion.div>

            {/* Plano Premium */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-burgundy rounded-[3rem] p-10 text-center text-white shadow-2xl relative overflow-hidden flex flex-col transform md:scale-105 z-20"
            >
              <div className="absolute top-6 right-6 bg-gold text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Mais Escolhido</div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col items-center mb-6">
                  <span className="bg-white/10 text-gold px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5">Completo</span>
                  <p className="text-[10px] text-gold font-black uppercase mt-2 animate-pulse">Economia Máxima</p>
                </div>
                <h2 className="text-3xl font-black mb-6">Plano Premium</h2>
                
                <div className="mb-8 max-w-[200px] mx-auto">
                  <img 
                    src={offerImage} 
                    alt="Pack Premium + Bônus" 
                    className="w-full h-auto rounded-xl shadow-xl border-2 border-white/10"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <ul className="text-left space-y-4 mb-10 flex-grow max-w-[240px] mx-auto w-full">
                  <li className="flex items-center gap-3 text-sm font-bold"><Check size={16} className="text-gold" /> +100 Moldes Prontos</li>
                  <li className="flex items-center gap-3 text-sm font-bold"><Check size={16} className="text-gold" /> Acesso Vitalício</li>
                  <li className="flex items-center gap-3 text-sm font-bold text-gold"><Check size={16} className="text-gold" /> TODOS OS BÔNUS INCLUSOS</li>
                </ul>

                <div className="mb-8">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-white/40 line-through text-sm font-medium">De R$ 47,90</span>
                    <div className="text-white font-black text-5xl leading-none">
                      R$ 14,90
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => window.open("https://pay.wiapy.com/6a08e91995204c0a4a24204b", "_blank")}
                  className="w-full uppercase tracking-tighter py-6 px-8 text-lg bg-gold text-white border-gold hover:shadow-gold-xl shadow-lg"
                >
                  Escolher Plano Premium
                </Button>
              </div>
              
              {/* Design accents */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto font-sans">
        <SectionTitle>O que coordenadores de pastoral dizem</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Maria Aparecida"
            role="Coordenadora de Pastoral"
            location="Paróquia São José — SP"
            text="Recebi o material e fiquei impressionada com a qualidade! São +100 moldes de excelente qualidade. Já escolhi quais vou usar e estou animadíssima para o dia do tapete!"
          />
          <TestimonialCard 
            name="Antônio Carlos"
            role="Ministro da Eucaristia"
            location="Belo Horizonte — MG"
            text="O PDF chegou no meu e-mail na hora. Já imprimi alguns moldes para ver o tamanho e ficaram perfeitos. A variedade é incrível — tem de tudo para montar um tapete completo."
          />
          <TestimonialCard 
            name="Helena Beatriz"
            role="Catequista"
            location="Curitiba — PR"
            text="Comprei ontem e já baixei tudo! Os moldes são super detalhados e o guia de materiais que vem junto é um presente. Recomendo a qualquer comunidade que queira se organizar antes do Corpus Christi."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-6 font-sans">
        <div className="max-w-4xl mx-auto">
          <SectionTitle centered={false}>Perguntas Frequentes</SectionTitle>
          <div className="space-y-2 mt-8">
            <FAQItem 
              question="Em qual formato recebo os moldes?"
              answer="Você recebe todos os moldes em formato PDF de alta qualidade, prontos para imprimir em papel A4 comum (em casa) ou ampliar para tamanho pôster em gráficas."
            />
            <FAQItem 
              question="Como recebo meu produto?"
              answer="O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com os links para download direto de todo o material."
            />
            <FAQItem 
              question="Posso imprimir em tamanho maior?"
              answer="Com certeza! O material foi preparado para que você possa imprimir em folhas A4 ou levar a uma gráfica e pedir o formato Pôster para moldes gigantes."
            />
            <FAQItem 
              question="Para quantas pessoas é indicado?"
              answer="O pack é ideal para paróquias, comunidades, frentes de missão ou grupos de amigos que desejam economizar tempo nos desenhos e focar na montagem dos tapetes."
            />
            <FAQItem 
              question="E se eu tiver dúvidas após a compra?"
              answer="Oferecemos suporte completo via e-mail para garantir que você consiga baixar e imprimir todo o material sem dificuldades."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[39px] font-black mb-8">Pronto para criar tapetes inesquecíveis?</h2>
          <p className="text-xl md:text-2xl text-burgundy/70 mb-12 font-medium">Acesso imediato. Download direto. Use todos os anos.</p>
          <Button 
            onClick={scrollToPlanos}
            className="mx-auto uppercase tracking-tighter py-8 px-16 text-xl shadow-gold-xl"
          >
            Quero aproveitar a promoção <ArrowRight size={20} />
          </Button>
          <div className="mt-8 flex items-center justify-center gap-2 font-bold text-burgundy/40 uppercase tracking-widest text-sm">
            <Check size={18} className="text-gold" /> Por apenas R$ 9,90 — Acesso vitalício
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-burgundy text-white py-20 px-6 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tight">Corpus Christi</h2>
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Mail size={24} /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-sm uppercase tracking-widest font-bold text-white/60">
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/10 text-center text-sm text-white/40 space-y-4 font-medium">
          <p>© 2026 Pack Moldes de Corpus Christi. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center gap-2">Este produto é digital. Não há envio físico. <MapPin size={14} /></p>
        </div>
      </footer>
    </div>
  );
}
