import { Link } from "wouter";
import { Code, Cloud, Server, Database, Briefcase, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Services() {
  const serviceCategories = [
    {
      icon: Code,
      title: "Application Development",
      description: "Build powerful applications that drive your business forward.",
      services: [
        "Custom Web Application Development",
        "Mobile App Development (Android & iOS)",
        "API Development and Integration",
        "UI/UX Design and Front-End Development",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Modernize your infrastructure and accelerate your deployment cycles.",
      services: [
        "Cloud Migration (AWS, Azure, GCP)",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Performance Optimization and Monitoring",
      ],
    },
    {
      icon: Server,
      title: "IT Infrastructure & Support",
      description: "Keep your systems running reliably with enterprise-grade support.",
      services: [
        "Server Setup and Maintenance",
        "Network Configuration and Security",
        "Remote IT Helpdesk and L1/L2 Support",
        "Backup and Disaster Recovery Planning",
      ],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights.",
      services: [
        "Database Design and Optimization",
        "Reporting & Dashboards",
        "Data Integration (ETL)",
      ],
    },
    {
      icon: Briefcase,
      title: "Consulting & Staffing",
      description: "Expert guidance and dedicated resources for your projects.",
      services: [
        "IT Strategy and Architecture Consulting",
        "Dedicated Developer / Extended Team",
        "Short-Term Project Consulting",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            At Jayasri Technology Services, we design, build, and support comprehensive IT solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="border-l-4 border-primary pl-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {category.title}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Showcase with Images */}
      <section className="section-padding bg-blue-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Expertise in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/dev-team.jpg"
                alt="Development team"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Expert Development Team
                </h3>
                <p className="text-gray-600">
                  Our developers are skilled in the latest technologies and frameworks, delivering high-quality solutions.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/cloud-services.jpg"
                alt="Cloud services"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Cloud Infrastructure
                </h3>
                <p className="text-gray-600">
                  We design and manage scalable cloud infrastructure for optimal performance and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and find the perfect solution for your business.
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
