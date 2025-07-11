import { MapPin, Calendar, Clock, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen sophisticated-gradient">
      {/* Hero Section */}
      <section className="relative section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Heart className="w-12 h-12 mx-auto mb-6 text-wedding-gold" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 tracking-wide">
              You're Invited
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light italic">
              to celebrate our wedding
            </p>
          </div>
          
          <div className="wedding-gradient rounded-2xl p-8 md:p-12 old-money-shadow elegant-border">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-2">
              Sarah & Michael
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>August 17th, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Card className="old-money-shadow elegant-border">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
                Event Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Clock className="w-5 h-5 text-wedding-gold" />
                    <span className="text-lg font-medium">3:00 PM</span>
                  </div>
                  <div className="flex items-start justify-center md:justify-start gap-2">
                    <MapPin className="w-5 h-5 text-wedding-gold mt-1" />
                    <div>
                      <p className="font-medium">The Estate Gardens</p>
                      <p className="text-muted-foreground">123 Countryside Lane</p>
                      <p className="text-muted-foreground">Elegant Valley, State 12345</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full md:w-auto"
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      View Map
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-primary"
                    onClick={() => {
                      const event = {
                        title: 'Sarah & Michael Wedding',
                        start: '20250817T150000Z',
                        end: '20250817T230000Z',
                        description: 'Wedding Celebration',
                        location: 'The Estate Gardens, 123 Countryside Lane'
                      };
                      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
                      window.open(url, '_blank');
                    }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('#rsvp', '_self')}
                  >
                    RSVP Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary mb-12 text-center">
            Wedding Timeline
          </h2>
          
          <Card className="old-money-shadow elegant-border">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-wedding-gold min-w-20">3:00</div>
                  <Separator orientation="vertical" className="h-8" />
                  <div>
                    <h3 className="font-medium">Guest Arrival</h3>
                    <p className="text-muted-foreground">Welcome drinks and mingling</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-wedding-gold min-w-20">3:30</div>
                  <Separator orientation="vertical" className="h-8" />
                  <div>
                    <h3 className="font-medium">Ceremony</h3>
                    <p className="text-muted-foreground">Outdoor ceremony in the gardens</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-wedding-gold min-w-20">4:00</div>
                  <Separator orientation="vertical" className="h-8" />
                  <div>
                    <h3 className="font-medium">Cocktail Hour</h3>
                    <p className="text-muted-foreground">Celebration and photography</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-wedding-gold min-w-20">6:00</div>
                  <Separator orientation="vertical" className="h-8" />
                  <div>
                    <h3 className="font-medium">Reception</h3>
                    <p className="text-muted-foreground">Dinner, dancing, and celebration</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-wedding-gold min-w-20">11:15</div>
                  <Separator orientation="vertical" className="h-8" />
                  <div>
                    <h3 className="font-medium">Transportation</h3>
                    <p className="text-muted-foreground">Shuttle service departure</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary mb-12 text-center">
            Our Story
          </h2>
          
          <Card className="old-money-shadow elegant-border">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Our story began in the halls of Westfield Academy, during a school trip to the historic 
                  city of Charleston. It was there, among the cobblestone streets and antebellum architecture, 
                  that our paths first crossed. We were simply acquaintances then, but something in our 
                  shared laughter and conversations laid the foundation for something extraordinary.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  For years, we remained close friends, exchanging messages, sharing dreams, and supporting 
                  each other through life's adventures. We collaborated on school projects, performed together 
                  in theater productions, and found ourselves drawn to each other's company. Each shared moment, 
                  each conversation deepened our connection, though we hadn't yet realized where it would lead.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Then one perfect autumn day, everything changed. The spark that had been quietly glowing 
                  in our hearts burst into a brilliant flame. We understood that what we had was more than 
                  friendship—it was love. From that moment, we knew we wanted to build a life together, 
                  creating new memories while honoring the beautiful journey that brought us here.
                </p>
                
                <p className="text-lg leading-relaxed text-center italic text-wedding-gold">
                  "Two hearts, one journey, endless love."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-8">
            Please Respond
          </h2>
          
          <Card className="old-money-shadow elegant-border">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-8">
                Your presence would make our special day complete. 
                Please let us know if you'll be joining us for the celebration.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-primary text-lg py-6"
                  onClick={() => window.open('https://forms.google.com/create', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  RSVP via Google Form
                </Button>
                
                <div className="pt-4 text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>Alternative RSVP methods:</strong>
                  </p>
                  <ul className="space-y-1">
                    <li>• Email us at: sarah.michael.wedding@email.com</li>
                    <li>• Call or text: (555) 123-LOVE</li>
                    <li>• Wedding website response form</li>
                    <li>• Traditional mail to our address</li>
                  </ul>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <p className="text-sm text-muted-foreground">
                Kindly respond by <strong>July 1st, 2025</strong> to help us with planning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-8 h-8 mx-auto mb-4 text-wedding-gold" />
          <p className="text-lg font-light">
            Sarah & Michael • August 17th, 2025
          </p>
          <p className="text-sm mt-2 opacity-80">
            With love and anticipation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
