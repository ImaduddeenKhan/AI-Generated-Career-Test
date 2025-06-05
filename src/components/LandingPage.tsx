
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Target, Users, Zap } from 'lucide-react';

interface LandingPageProps {
  onStartTest: () => void;
}

export const LandingPage = ({ onStartTest }: LandingPageProps) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your responses to provide personalized career recommendations"
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Get matched with career paths that align with your interests, skills, and personality traits"
    },
    {
      icon: Users,
      title: "Psychometric Insights",
      description: "Discover hidden aspects of your personality and receive insights you've never heard before"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get your comprehensive career report with actionable insights in minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Discover Your Perfect Career Path
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Take our AI-powered career test and unlock insights about your future. 
            Get personalized recommendations based on advanced psychometric analysis.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={onStartTest}
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start AI Career Test
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-20 text-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
            <p className="text-gray-600">Data Points Analyzed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-600">50+</h3>
            <p className="text-gray-600">Career Streams</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">95%</h3>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
