import { Link } from "wouter";
import { Target, Shield, Handshake, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We never compromise on code quality, security, or performance. Every deliverable meets rigorous standards.",
    },
    {
      icon: Handshake,
      title: "Transparency",
      description:
        "Clear communication, honest assessments, and realistic timelines build trust with our clients.",
    },
    {
      icon: Target,
      title: "Long-Term Partnerships",
      description:
        "We view our clients as partners. Your success is our success, and we're committed to supporting your growth.",
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly. Our team stays current with the latest tools, frameworks, and best practices.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description:
        "We deeply understand your business goals, technical requirements, and constraints before proposing solutions.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our architects design scalable, secure solutions with clear technical specifications and project timelines.",
    },
    {
      number: "03",
      title: "Development & Implementation",
      description:
        "Our developers build solutions using best practices, maintaining code quality and security throughout.",
    },
    {
      number: "04",
      title: "Testing & QA",
      description:
        "Rigorous testing ensures your solution is reliable, secure, and performs as expected.",
    },
    {
      number: "05",
      title: "Deployment & Support",
      description:
        "We manage smooth deployments and provide ongoing support to ensure continued success.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Jayasri Technology Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Empowering businesses with innovative IT solutions since our founding.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Jayasri Technology Services is a leading IT solutions provider based in Bangalore, India. We specialize in helping startups and small-to-medium enterprises (SMBs) leverage technology to achieve their business goals.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With a team of experienced engineers and consultants, we deliver end-to-end solutions spanning custom software development, cloud infrastructure, and IT support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our client base spans diverse industries, from e-commerce and fintech to healthcare and logistics. We pride ourselves on understanding our clients' unique challenges and delivering solutions that drive real business impact.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/consulting-meeting.png"
                alt="Team meeting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower businesses of all sizes with innovative, reliable, and secure technology solutions that drive growth, efficiency, and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section-padding bg-blue-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Delivery Model
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 pt-8 border-t border-border">
              Throughout this process, we maintain regular communication with clear status updates and transparent reporting. We believe in on-time delivery and take ownership of project outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/developer-work.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Team
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team is led by engineers with extensive experience in web development, cloud architecture, and IT infrastructure. We bring together specialists in frontend development, backend systems, DevOps, database design, and project management.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This diverse expertise allows us to tackle complex challenges and deliver comprehensive solutions. We're committed to continuous learning and staying at the forefront of technology innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with technology? Get in touch with us today.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
              Contact Us
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
