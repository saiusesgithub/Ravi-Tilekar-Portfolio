import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Rocket, Lightbulb, Star, Users, Mic, MapPin, Calendar } from 'lucide-react';
import { speakingTopics, speakingEvents, speakerStats, speakerGallery } from '@/data/speaker';
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

      {/* Recent Events List */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold mb-6 text-center">Recent Appearances</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {speakingEvents.slice(0, 6).map(event => (
            <Card key={event.id} className="bg-secondary/30 border-none">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="min-w-[4px] h-12 bg-primary rounded-full mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-lg">{event.eventName}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-background border uppercase tracking-wider">{event.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.venue}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery - In Action */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold mb-6 text-center">In Action</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {speakerGallery.map((src, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img
                src={src}
                alt="Speaking engagement"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
