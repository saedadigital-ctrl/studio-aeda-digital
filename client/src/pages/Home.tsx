
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Zap, Target, TrendingUp, Users, Brain, ArrowRight } from "lucide-react";

export default function Home() {

  const benefits = [
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Elimine tarefas repetitivas e libere tempo para decisões estratégicas",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Reduza trabalho manual e aumente resultados com processos otimizados",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Tecnologia de ponta adaptada ao seu negócio",
    },
  ];

  const services = [
    {
      title: "Mentoria",
      duration: "4 semanas",
      description: "Aprenda a implementar IA no seu negócio com suporte personalizado",
      features: [
        "Acompanhamento semanal individual",
        "Revisão estratégica mensal",
        "Acesso à comunidade exclusiva",
      ],
      cta: "Solicitar Proposta",
      highlight: false,
    },
    {
      title: "Consultoria AEDA Performance",
      duration: "4-6 semanas",
      description: "Implementação completa de automação e IA no seu processo",
      features: [
        "Otimização de processos-chave",
        "Implementação de KPIs avançados",
        "Treinamento de equipe-chave",
      ],
      cta: "Solicitar Proposta",
      highlight: true,
    },
    {
      title: "Premium AEDA Evolution",
      duration: "6-8 semanas",
      description: "Transformação digital completa com IA, automação e dados",
      features: [
        "Transformação digital completa",
        "Estratégia de expansão global",
        "Suporte executivo prioritário 24/7",
      ],
      cta: "Solicitar Proposta",
      highlight: false,
    },
  ];

  const aedaMethod = [
    {
      letter: "A",
      title: "Análise",
      description: "Avaliação profunda do cenário atual e identificação de oportunidades e desafios",
    },
    {
      letter: "E",
      title: "Estratégia",
      description: "Definição de plano de ação claro e metas alinhadas aos objetivos de negócio",
    },
    {
      letter: "D",
      title: "Desenvolvimento",
      description: "Execução das iniciativas planejadas com foco na criação de valor e inovação",
    },
    {
      letter: "A",
      title: "Acompanhamento",
      description: "Monitoramento contínuo dos resultados e ajustes proativos para otimização",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Sober Design */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automação e IA para Construtoras e Advogados
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reduza trabalho manual. Aumente resultados. Metodologia A.E.D.A. com suporte completo do início ao fim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-lg shadow-sm transition-all text-lg"
                  asChild
                >
                  <Link href="/contato">Diagnóstico Gratuito</Link>
                </Button>
              </div>
            </div>

            {/* Right: Professional Image */}
            <div className="relative">
              <img
                src="/images/hero-workspace.webp"
                alt="Profissional trabalhando com automação e IA"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Ficar preso na gestão manual é tudo o que não precisa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tempo perdido em tarefas repetitivas</h3>
              <p className="text-gray-600">Equipe sobrecarregada com processos manuais que poderiam ser automatizados</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Decisões sem dados confiáveis</h3>
              <p className="text-gray-600">Falta de visibilidade clara sobre o que realmente impacta os resultados</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dificuldade em escalar operações</h3>
              <p className="text-gray-600">Crescimento limitado pela capacidade manual da equipe</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnologia subutilizada</h3>
              <p className="text-gray-600">Ferramentas disponíveis mas sem estratégia clara de implementação</p>
            </div>
          </div>
          <div className="mt-12">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-lg shadow-sm transition-all text-lg"
              asChild
            >
              <Link href="/contato">Falar com Consultor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Método A.E.D.A. */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Método A.E.D.A.</h2>
            <p className="text-xl text-gray-600">Uma abordagem estruturada para o sucesso do seu negócio</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {aedaMethod.map((step, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {step.letter}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-lg shadow-sm transition-all text-lg"
              asChild
            >
              <Link href="/contato">Conhecer Metodologia</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Resultados Mensuráveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 hover:border-blue-600 transition-colors">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-lg shadow-sm transition-all text-lg"
              asChild
            >
              <Link href="/contato">Agendar Diagnóstico</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços - SEM PREÇOS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Escolha Seu Plano</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Soluções personalizadas para cada estágio do seu negócio</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 transition-all ${
                  service.highlight
                    ? "bg-blue-600 text-white shadow-xl ring-2 ring-blue-600 ring-offset-4"
                    : "bg-white border border-gray-200 text-gray-900"
                }`}
              >
                {service.highlight && (
                  <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    ⭐ MAIS ESCOLHIDO
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className={`text-sm mb-6 ${service.highlight ? "text-blue-100" : "text-gray-600"}`}>
                  Duração: {service.duration}
                </p>
                <p className={`mb-8 ${service.highlight ? "text-blue-50" : "text-gray-600"}`}>
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.highlight ? "text-blue-200" : "text-blue-600"}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold py-6 rounded-lg transition-all ${
                    service.highlight
                      ? "bg-white hover:bg-gray-100 text-blue-600"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  asChild
                >
                  <Link href="/contato">{service.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pronto para automatizar seu negócio?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Agende um diagnóstico gratuito e descubra oportunidades de automação específicas para seu negócio
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-6 rounded-lg shadow-sm transition-all text-lg inline-flex items-center gap-2"
            asChild
          >
            <Link href="/contato">
              Agendar Diagnóstico Gratuito
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
