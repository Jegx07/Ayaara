import React from 'react';
import Layout from '@/components/ui/Layout';
import AnimatedShaderHero from '@/components/ui/animated-shader-background';
import { Rocket, Sparkles, Brain, Activity, Target, Users, BookOpen, TrendingUp, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your motivation patterns and provide personalized insights.",
    color: "text-primary"
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "24/7 vital sign tracking including heart rate, blood pressure, and body temperature for comprehensive health insights.",
    color: "text-accent"
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and achieve your academic and personal goals with intelligent progress tracking and milestone celebrations.",
    color: "text-success"
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Connect with peers and mentors in a supportive environment designed to boost collective motivation.",
    color: "text-destructive"
  },
  {
    icon: BookOpen,
    title: "Skill Assessment",
    description: "Comprehensive skill gap analysis and personalized course recommendations to advance your career.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure. We prioritize your privacy while delivering powerful insights.",
    color: "text-accent"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    content: "MotiTrack helped me increase my study efficiency by 40%. The AI recommendations are spot-on!",
    rating: 5
  },
  {
    name: "Dr. Michael Chen",
    role: "Professor of Psychology",
    content: "As an educator, I can now track my students' engagement levels and provide timely support when needed.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Pre-Med Student",
    content: "The motivation tracking has been a game-changer for my MCAT prep. I finally understand my peak performance hours.",
    rating: 5
  }
];

export default function LandingPage() {
  return (
    <Layout>
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-lg border-b border-[#38bdf8]"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/src/assets/ayaraa-logo.png" alt="Ayaraa Logo" className="w-8 h-8 object-contain" />
            </div>
          <span className="font-bold text-xl text-white ml-2">ayaraa</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline" className="text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-white transition">
                Dashboard
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-primary-blue text-white shadow-lg hover:bg-blue-700 transition">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <AnimatedShaderHero
        trustBadge={{
          text: "Trusted by 10,000+ Students",
          icons: [<Rocket key={1} size={20} />, <Sparkles key={2} size={20} />],
          className: "bg-[#0f172a] text-[#38bdf8] rounded-full px-4 py-2 inline-flex items-center gap-2"
        }}
        headline={{
          line1: "Unlock Your Potential",
          line2: "With AI Motivation Tracking",
        }}
        subtitle="Empowering students and educators with personalized motivation insights and real-time tracking to boost academic success."
        subtitleClassName="text-gray-300"
        buttons={{
          primary: {
            text: "Start Tracking",
            onClick: () => alert('Start Tracking clicked!'),
            className: "bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white shadow-lg hover:opacity-90"
          },
          secondary: {
            text: "View Features",
            onClick: () => alert('View Features clicked!'),
            className: "bg-white text-[#2563eb] hover:bg-gray-100"
          },
        }}
      />

      {/* Features Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Powerful Features for <span className="text-[#38bdf8]">Peak Performance</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover how MotiTrack combines cutting-edge technology with educational psychology 
              to unlock your full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#1e293b] border border-[#38bdf8] shadow-lg rounded-lg h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#38bdf8]/10">
                        <feature.icon className={`w-6 h-6 text-[#38bdf8]`} />
                      </div>
                      <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Trusted by <span className="text-[#38bdf8]">Students & Educators</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of learners who have transformed their academic journey with MotiTrack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-[#1e293b] rounded-lg shadow-lg h-full border border-[#38bdf8]">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic text-gray-300">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-sm text-white">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-gray-300 text-lg">
              Join MotiTrack today and experience the future of motivation tracking and educational technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white shadow-lg">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="text-[#38bdf8] border-[#38bdf8] hover:bg-white hover:text-[#38bdf8]">
                  View Demo Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-[#38bdf8]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#38bdf8] rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">MotiTrack</span>
              </div>
              <p className="text-gray-300 text-sm">
                Empowering students and educators with AI-powered motivation tracking technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#38bdf8] mt-12 pt-8 text-center text-sm text-gray-300">
            © 2024 MotiTrack. All rights reserved.
          </div>
        </div>
      </footer>
    </Layout>
  );
}
