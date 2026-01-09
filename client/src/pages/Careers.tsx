import { Link } from "wouter";
import { Briefcase, Users, TrendingUp, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Software Engineer (Full-Stack)",
      description:
        "We're seeking a Full-Stack Software Engineer to join our development team. You'll work on diverse projects, from web applications to cloud infrastructure.",
      responsibilities: [
        "Design and develop scalable web applications using modern frameworks",
        "Build RESTful APIs and microservices",
        "Collaborate with designers and product managers to deliver user-centric solutions",
        "Participate in code reviews and contribute to team knowledge sharing",
        "Troubleshoot and optimize application performance",
      ],
      skills: [
        "2+ years of experience in full-stack development",
        "Proficiency in JavaScript/TypeScript, React, Node.js, or similar technologies",
        "Strong understanding of databases (SQL and NoSQL)",
        "Experience with version control (Git) and CI/CD pipelines",
        "Problem-solving mindset and attention to detail",
      ],
    },
    {
      title: "Front-End Developer",
      description:
        "We're looking for a talented Front-End Developer to create beautiful, responsive, and accessible user interfaces.",
      responsibilities: [
        "Build responsive web interfaces using React, Vue, or Angular",
        "Implement pixel-perfect designs and ensure cross-browser compatibility",
        "Optimize frontend performance and user experience",
        "Write clean, maintainable code with comprehensive testing",
        "Collaborate with UX/UI designers and backend teams",
      ],
      skills: [
        "2+ years of front-end development experience",
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with modern frontend frameworks (React, Vue, Angular)",
        "Understanding of responsive design and accessibility standards",
        "Familiarity with version control and development tools",
      ],
    },
    {
      title: "Support Engineer",
      description:
        "Join our support team and help our clients succeed. Provide technical assistance and ensure our clients' systems run smoothly.",
      responsibilities: [
        "Provide L1/L2 technical support to clients via email, chat, and phone",
        "Troubleshoot infrastructure, application, and network issues",
        "Document solutions and contribute to knowledge base articles",
        "Escalate complex issues to senior engineers when needed",
        "Proactively monitor systems and alert clients to potential issues",
      ],
      skills: [
        "1+ years of IT support or technical support experience",
        "Strong troubleshooting and problem-solving skills",
        "Basic understanding of Linux/Windows servers and networking",
        "Excellent communication skills (written and verbal)",
        "Ability to work in a fast-paced environment",
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
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Grow your career with a team of passionate engineers and innovators.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join Jayasri Technology Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in continuous learning, professional development, and creating an environment where talented individuals can do their best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-blue-50 border border-blue-100">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Collaborative Culture
              </h3>
              <p className="text-gray-600">
                Work with experienced engineers who are passionate about technology and eager to share knowledge.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-indigo-50 border border-indigo-100">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Growth Opportunities
              </h3>
              <p className="text-gray-600">
                Develop your skills with diverse projects and access to training and professional development resources.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-purple-50 border border-purple-100">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Meaningful Work
              </h3>
              <p className="text-gray-600">
                Build solutions that impact real businesses and help companies transform through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-blue-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Current Openings
          </h2>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Required Skills
                    </h4>
                    <ul className="space-y-2">
                      {job.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            How to Apply
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Send Your Application
                </h3>
                <p className="text-gray-600 mb-4">
                  We'd love to hear from you! To apply for any of the positions listed above, please send your resume and a brief cover letter to:
                </p>
                <a
                  href="mailto:careers@jayasritech.com"
                  className="text-primary font-semibold hover:underline"
                >
                  careers@jayasritech.com
                </a>
                <p className="text-gray-600 mt-4">
                  Include the job title in the subject line (e.g., "Application: Full-Stack Software Engineer").
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-foreground mb-3">
                What to Include in Your Cover Letter
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Your experience and relevant skills</li>
                <li>• What excites you about the role</li>
                <li>• Why you'd be a great fit for our team</li>
                <li>• Links to your portfolio or GitHub (if applicable)</li>
              </ul>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              We review applications on a rolling basis and will contact promising candidates for an interview.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
          </p>
          <a
            href="mailto:careers@jayasritech.com"
            className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
