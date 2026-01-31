import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Check, Send, User, Mail, Calendar, MapPin, Sparkles } from 'lucide-react';
import { cn } from "@/lib/utils";

type InquiryType = 'general' | 'mentorship' | 'speaker';

export function ContactDialog() {
    const [open, setOpen] = useState(false);
    const [inquiryType, setInquiryType] = useState<InquiryType>('general');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setOpen(false);
            // Reset form would go here
        }, 3000);
    };

    const renderFormContent = () => {
        switch (inquiryType) {
            case 'speaker':
                return (
                    <>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="date">Event Date</Label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="date" type="date" className="pl-9" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="venue">Venue/Location</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="venue" placeholder="City or Online" className="pl-9" required />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="audience">Audience Details</Label>
                            <Input id="audience" placeholder="e.g. 500+ students, Corporate execs" required />
                        </div>
                    </>
                );
            case 'mentorship':
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="stage">Startup Stage</Label>
                            <Input id="stage" placeholder="e.g. Idea, MVP, Growth" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="challenges">Key Challenges</Label>
                            <Textarea id="challenges" placeholder="What are your biggest blockers right now?" required />
                        </div>
                    </>
                );
            default:
                return (
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="How can we collaborate?" rows={4} required />
                    </div>
                );
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Get in Touch
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-background border-border">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                            <Check className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold">Message Sent!</h3>
                        <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="font-serif text-2xl text-center">Let's Connect</DialogTitle>
                            <DialogDescription className="text-center">
                                Choose an option below to start the conversation.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-3 gap-2 mb-6 mt-2">
                            <button
                                type="button"
                                onClick={() => setInquiryType('general')}
                                className={cn(
                                    "flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200 gap-2",
                                    inquiryType === 'general' ? "bg-primary/10 border-primary text-primary" : "bg-secondary/50 border-transparent hover:bg-secondary text-muted-foreground"
                                )}
                            >
                                <Mail className="h-5 w-5" />
                                <span className="text-xs font-medium">General</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setInquiryType('mentorship')}
                                className={cn(
                                    "flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200 gap-2",
                                    inquiryType === 'mentorship' ? "bg-primary/10 border-primary text-primary" : "bg-secondary/50 border-transparent hover:bg-secondary text-muted-foreground"
                                )}
                            >
                                <Sparkles className="h-5 w-5" />
                                <span className="text-xs font-medium">Mentorship</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setInquiryType('speaker')}
                                className={cn(
                                    "flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200 gap-2",
                                    inquiryType === 'speaker' ? "bg-primary/10 border-primary text-primary" : "bg-secondary/50 border-transparent hover:bg-secondary text-muted-foreground"
                                )}
                            >
                                <User className="h-5 w-5" />
                                <span className="text-xs font-medium">Speaker</span>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" required />
                                </div>
                            </div>

                            {renderFormContent()}

                            <Button type="submit" className="w-full h-11 mt-2 text-base">
                                Send Request <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
