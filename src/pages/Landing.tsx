import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DroneScene } from '@/components/3D/DroneScene';
import { Plane, Shield, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const features = [
    {
      icon: Plane,
      title: "Drone Management",
      description: "Track and manage your drone inventory with real-time status updates"
    },
    {
      icon: Shield,
      title: "Secure Requests",
      description: "Role-based approval system with audit trails for accountability"
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Automated overdue detection and email notifications"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into usage patterns and trends"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-background">
      <DroneScene />
      
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6 flex justify-between items-center backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Plane className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">DroneHub</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </motion.div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Drone
                  <span className="text-primary"> Management</span>
                  <br />
                  Made Simple
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Professional drone borrowing and inventory management system for universities and institutions. 
                  Streamline requests, approvals, and tracking with our modern platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-transform shadow-glow">
                    Start Managing Drones
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>

              <div className="flex gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Drones Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Universities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative backdrop-blur-xl bg-card/80 border-primary/20 shadow-card">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Plane className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">DJI Mavic 3 Pro</h3>
                        <p className="text-sm text-muted-foreground">Available • Excellent condition</p>
                      </div>
                      <div className="ml-auto w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Request Status</span>
                        <span className="text-green-500 font-medium">Approved</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-3/4"></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Start: Today</span>
                        <span>Return: Tomorrow</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Everything you need to manage drones
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From simple requests to complex analytics, our platform provides all the tools 
                you need for efficient drone management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-gradient-card border-primary/20">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 backdrop-blur-sm py-8">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>&copy; 2024 DroneHub. Built for modern institutions.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}