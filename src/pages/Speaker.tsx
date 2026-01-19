import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Rocket, Lightbulb, Star, Users, Mic, MapPin } from 'lucide-react';
import { speakingTopics, speakingEvents, speakerStats } from '@/data/speaker';
import { toast } from 'sonner';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Lightbulb, Star, Users, Mic, MapPin,
};

export default function Speaker() {
  const [formData, setFormData] = useState({
    name: '', email: '', eventType: '', location: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Your invitation has been received.');
    setFormData({ name: '', email: '', eventType: '', location: '', message: '' });
  };

  return (
    <div className="container py-12 animate-fade-in">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Invite Me to Speak</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate about inspiring audiences on entrepreneurship, innovation, and youth empowerment.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          {speakerStats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl font-semibold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold mb-6 text-center">Speaking Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {speakingTopics.map(topic => {
            const Icon = iconMap[topic.icon];
            return (
              <Card key={topic.id} className="card-hover">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-serif text-lg font-semibold mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{topic.description}</p>
                  <ul className="space-y-1">
                    {topic.keyPoints.map((point, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">•</span>{point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Recent Events */}
      <section className="mb-16 bg-secondary/30 -mx-4 px-4 py-12 md:-mx-8 md:px-8">
        <h2 className="font-serif text-2xl font-semibold mb-6 text-center">Recent Appearances</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {speakingEvents.slice(0, 6).map(event => (
            <div key={event.id} className="aspect-video bg-background rounded-lg border flex items-center justify-center p-4 text-center">
              <div>
                <div className="font-semibold text-sm">{event.eventName}</div>
                <div className="text-xs text-muted-foreground">{event.venue}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-xl mx-auto">
        <h2 className="font-serif text-2xl font-semibold mb-6 text-center">Send an Invitation</h2>
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="keynote">Keynote</SelectItem>
                    <SelectItem value="panel">Panel Discussion</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="guest-lecture">Guest Lecture</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Location / City"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
              <Textarea
                placeholder="Tell me about your event..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
              <Button type="submit" className="w-full">Send Invitation</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
