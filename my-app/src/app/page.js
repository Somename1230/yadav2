'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, Users, Building2, Phone, Mail, 
  MapPin, Clock, CheckCircle2, Target, Shield, TrendingUp,
  Linkedin, Facebook, Twitter, Youtube
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const trainingModules = [
    { id: 1, title: 'Module 1 - Heating - Steam', image: '/Module1.webp', link: '/training/module-1' },
    { id: 2, title: 'Module 2 - Heating - Water', image: '/Module2.webp', link: '/training/module-2' },
    { id: 3, title: 'Module 3 - Heating - Air', image: '/Module3.webp', link: '/training/module-3' },
    { id: 4, title: 'Module 4 - Cooling Water Side', image: '/Module4.webp', link: '/training/module-4' },
    { id: 5, title: 'Module 5 - Cooling Air Side', image: '/Module5.webp', link: '/training/module-5' },
    { id: 6, title: 'Module 6 - BMS.EMS Controls', image: '/Module6.webp', link: '/training/module-6' },
    { id: 7, title: 'Module 7 - DHW Heating', image: '/Module7.webp', link: '/training/module-7' },
    { id: 8, title: 'Module 8 - Heating & Cooling Air Side', image: '/Module8.webp', link: '/training/module-8' },
    { id: 9, title: 'Case Studies Cx, EE, MEP', image: '/CaseStudies.webp', link: '/training/case-studies' },
  ];

  const partners = [
    { name: 'Energy Star', logo: '/Image3.webp' },
    { name: 'AEE', logo: '/Image3.webp' },
    { name: 'National Grid', logo: '/Image4.webp' },
    { name: 'Con Edison', logo: '/Image4.webp' },
  ];

  const benefits = [
    { icon: Award, title: 'Industry Certified', description: 'Our training programs meet all industry standards and certifications' },
    { icon: Users, title: 'Expert Instructors', description: '20+ years of combined experience in the energy efficiency industry' },
    { icon: Target, title: 'Hands-On Learning', description: 'Practical, real-world training with actual equipment' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Advance your career with specialized energy efficiency skills' },
  ];

  const targetAudience = [
    'Building Engineers & Operators',
    'Facility Managers',
    'HVAC Technicians',
    'Energy Managers',
    'Maintenance Personnel',
    'Property Management Teams',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:6267924074" className="flex items-center gap-2 transition-colors hover:text-blue-600">
              <Phone className="h-4 w-4" />
              <span>626-792-4074</span>
            </a>
            <a href="mailto:yadavtrainingsolutions@gmail.com" className="flex items-center gap-2 transition-colors hover:text-blue-600">
              <Mail className="h-4 w-4" />
              <span>yadavtrainingsolutions@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-zinc-900">Yadav Training Solutions</h1>
                <p className="text-xs text-zinc-600">Energy Efficiency Consulting</p>
              </div>
            </div>
            <div className="hidden gap-8 md:flex">
              <a href="#home" className="font-medium text-zinc-900 transition-colors hover:text-blue-600">HOME</a>
              <a href="#about" className="font-medium text-zinc-600 transition-colors hover:text-blue-600">ABOUT US</a>
              <a href="#training" className="font-medium text-zinc-600 transition-colors hover:text-blue-600">TRAINING</a>
              <a href="#contact" className="font-medium text-zinc-600 transition-colors hover:text-blue-600">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-zinc-200/50" />
        <motion.div
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <Award className="h-4 w-4" />
                Professional Training & Consulting
              </div>
              <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-zinc-900 lg:text-6xl">
                Master Energy Efficiency Systems
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-zinc-600">
                Comprehensive hands-on training for building engineers and facility managers. 
                Learn from industry experts with decades of real-world experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#training"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GraduationCap className="h-5 w-5" />
                  View Training Modules
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-zinc-300 bg-white px-8 py-4 text-lg font-semibold text-zinc-900 transition-all hover:border-blue-600 hover:text-blue-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 shadow-2xl">
                <Image
                  src="/Image1.webp"
                  alt="Training facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-zinc-900">About Us</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-600" />
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
                <Image
                  src="/Image2.webp"
                  alt="About Yadav Training Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 text-3xl font-bold text-zinc-900">What Sets Us Apart</h3>
              <div className="mb-6 space-y-4 text-lg leading-relaxed text-zinc-600">
                <p>
                  Yadav Solutions is an Energy Efficiency Consulting Firm with unparalleled experience, education and understanding in the energy efficiency industry.
                </p>
                <p>
                  We pride ourselves on delivery of training of heating, cooling, hot water equipment in unique way that focuses on the essence of equipment operation that will serve you forever and will continually provide insight in the principles of what you do each day.
                </p>
                <p>
                  Our hands-on approach includes demonstration of actual equipment operation and real-world troubleshooting. We focus on cost savings opportunities, reducing utility bills, rebate analysis and identification opportunities within operating procedures of the business.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-semibold">20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-semibold">Industry Certified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-zinc-900">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600">
              We provide comprehensive, practical training that delivers real results for your facility and career
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group rounded-xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-blue-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-4 transition-colors group-hover:bg-blue-600">
                  <benefit.icon className="h-8 w-8 text-blue-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">{benefit.title}</h3>
                <p className="text-zinc-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Training Is For */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-zinc-900">Who This Training Is For</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600">
              Our programs are designed for professionals working in facility management and building operations
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={audience}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-blue-600 hover:shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="rounded-full bg-blue-100 p-2">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-zinc-900">{audience}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section id="training" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-zinc-900">Our Training Presentation</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600">
              Explore our comprehensive training modules covering all aspects of building systems and energy efficiency
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingModules.map((module, index) => (
              <motion.a
                key={module.id}
                href={module.link}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md transition-all hover:shadow-2xl hover:border-blue-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-zinc-100">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-blue-600">
                    {module.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                    <span>Learn More</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-zinc-900">Our Partners</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600">
              Trusted by leading organizations in the energy efficiency industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-blue-600"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-zinc-900">Contact Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600">
              Get in touch to learn more about our training programs and consulting services
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              className="rounded-xl border border-zinc-200 bg-white p-8 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-zinc-900">Get In Touch</h3>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-zinc-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-zinc-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-zinc-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    placeholder="Training inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-zinc-700">
                    Type Your Message Here
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    placeholder="Tell us about your training needs..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Phone</h4>
                    <p className="text-zinc-600">Call us during business hours</p>
                  </div>
                </div>
                <a href="tel:6267924074" className="text-xl font-bold text-blue-600 hover:text-blue-700">
                  626-792-4074
                </a>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Email</h4>
                    <p className="text-zinc-600">Send us an email anytime</p>
                  </div>
                </div>
                <a href="mailto:yadavtrainingsolutions@gmail.com" className="text-lg font-bold text-blue-600 hover:text-blue-700 break-all">
                  yadavtrainingsolutions@gmail.com
                </a>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Fax Number</h4>
                    <p className="text-zinc-600">Send documents via fax</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-zinc-900">
                  917-677-0715
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Company Address</h4>
                  </div>
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  c/o American Ice Company<br />
                  377 Degraw Street Suite 2<br />
                  Brooklyn, NY 11231
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Mailing Address</h4>
                  </div>
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  111 Piegan Market Street<br />
                  Buffalo, NY 14221
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* About Column */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-bold text-white">Yadav Training Solutions</h3>
                  <p className="text-sm text-zinc-400">Energy Efficiency Consulting</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Providing world-class training and consulting services for building operators and facility managers 
                with a focus on energy efficiency and cost savings.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="transition-colors hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="transition-colors hover:text-blue-400">About Us</a></li>
                <li><a href="#training" className="transition-colors hover:text-blue-400">Training</a></li>
                <li><a href="#contact" className="transition-colors hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Career Opportunities</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <a href="tel:6267924074" className="transition-colors hover:text-blue-400">626-792-4074</a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <span>Fax: 917-677-0715</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <a href="mailto:yadavtrainingsolutions@gmail.com" className="break-all transition-colors hover:text-blue-400">
                    yadavtrainingsolutions@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Addresses */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Our Locations</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-1 font-semibold text-white">Company Address:</p>
                  <p className="leading-relaxed">
                    377 Degraw Street Suite 2<br />
                    Brooklyn, NY 11231
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-white">Mailing Address:</p>
                  <p className="leading-relaxed">
                    111 Piegan Market Street<br />
                    Buffalo, NY 14221
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm">
                Copyright © {new Date().getFullYear()} Yadav Training Solutions. All Rights Reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="rounded-full bg-zinc-800 p-2 transition-colors hover:bg-blue-600" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-zinc-800 p-2 transition-colors hover:bg-blue-600" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-zinc-800 p-2 transition-colors hover:bg-blue-600" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-zinc-800 p-2 transition-colors hover:bg-blue-600" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
