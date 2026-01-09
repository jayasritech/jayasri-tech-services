import { Link } from "wouter";
import { ArrowRight, Code2, Cloud, Shield, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software & Web Development",
      description:
        "Develop scalable web and mobile applications using modern technologies. From concept to deployment, we handle the entire development lifecycle.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      description:
        "Migrate your infrastructure to the cloud and optimize your deployment pipelines. We specialize in AWS, Azure, and GCP.",
    },
    {
      icon: Shield,
      title: "IT Infrastructure & Support",
      description:
        "Build and maintain robust IT infrastructure with 24/7 support. Our team manages servers, networks, security, and disaster recovery.",
    },
    {
      icon: Users,
      title: "Consulting & Staffing",
      description:
        "Access expert consulting for IT strategy and architecture. We also provide dedicated developers and extended teams.",
    },
  ];

  const whyChoose = [
    {
      title: "Experienced Engineers",
      description:
        "Our team brings years of expertise in full-stack development, cloud architecture, and infrastructure management.",
    },
    {
      title: "Focus on Reliability",
      description:
        "Every solution we build is designed with reliability, security, and performance as core principles.",
    },
    {
      title: "Flexible Engagement",
      description:
        "Our flexible engagement models—from fixed-price projects to dedicated teams—scale with your business.",
    },
    {
      title: "Transparent Communication",
      description:
        "We believe in clear communication from day one. Regular updates and realistic timelines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                End-to-End IT Solutions for Growing Businesses
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Custom software development, cloud infrastructure, and dedicated IT support tailored for startups and SMBs. We transform your technology challenges into competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <a className="btn-primary inline-flex items-center justify-center gap-2">
                    View Services <ArrowRight size={18} />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="btn-secondary inline-flex items-center justify-center gap-2">
                    Request a Consultation
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/team-collaboration.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Key Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Jayasri Technology Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, reliability, and customer-centric approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <ArrowRight size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries & Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                SME & Startup Solutions
              </h3>
              <p className="text-gray-600">
                Accelerate your digital transformation with cost-effective technology solutions. We help startups build MVPs quickly and scale infrastructure as they grow.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Internal Tools & Automation
              </h3>
              <p className="text-gray-600">
                Streamline your business processes with custom internal tools and automation. Reduce manual work and improve team productivity.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Legacy Modernization
              </h3>
              <p className="text-gray-600">
                Breathe new life into legacy systems. We help organizations modernize outdated applications and adopt modern development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Jayasri Technology Services can help your business grow through technology.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
              Schedule a Consultation
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
