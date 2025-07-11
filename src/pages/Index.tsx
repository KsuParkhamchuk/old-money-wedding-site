import { MapPin, Calendar, Clock, Heart, ExternalLink, Camera, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Minimal with large letter */}
      <section className="section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <div className="text-9xl sm:text-[12rem] md:text-[16rem] font-cormorant font-light text-primary mb-8 leading-none">
              М
            </div>
            <div className="space-y-2 mb-8">
              <p className="text-sm uppercase tracking-[0.2em] font-inter font-light text-muted-foreground">
                мы приглашаем вас присоединиться к
              </p>
              <p className="text-sm uppercase tracking-[0.2em] font-inter font-light text-muted-foreground">
                нашей свадьбе
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-light text-primary">
              <div>М А Р К</div>
              <div className="italic text-2xl sm:text-3xl md:text-4xl my-4 font-light">и</div>
              <div>С А Р А</div>
            </div>
            
            <div className="pt-8 space-y-2">
              <div className="text-sm uppercase tracking-[0.2em] font-inter font-light">
                воскресенье
              </div>
              <div className="text-sm uppercase tracking-[0.2em] font-inter font-light">
                18:00
              </div>
              <div className="text-sm uppercase tracking-[0.2em] font-inter font-light">
                29 декабря 2024
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-inter font-light text-muted-foreground pt-2">
                ул. где-то 123, любой город, 12345
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-inter font-light text-muted-foreground">
                церемония последует
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              <Camera className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              <Camera className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              <Camera className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl sm:text-8xl font-cormorant font-light text-primary mb-12 leading-none">
            М
          </div>
          
          <div className="space-y-8 text-sm font-inter">
            <div>
              <h3 className="text-lg font-cormorant font-medium mb-4 uppercase tracking-wider">детали</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="uppercase tracking-[0.1em]">для вашего удобства</p>
                <p className="font-light">блок номеров зарезервирован в</p>
                <p className="font-light">отеле тихий</p>
              </div>
            </div>
            
            <div>
              <div className="space-y-2 text-muted-foreground">
                <p className="uppercase tracking-[0.1em] font-medium">пожалуйста, забронируйте номер</p>
                <p className="font-light">до 15 ноября. Не забудьте упомянуть</p>
                <p className="font-light">"свадьба марка и сары" при</p>
                <p className="font-light">бронировании.</p>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="font-light text-primary">www.отельтихий.com</p>
              <p className="font-light">800 тихая ул.</p>
              <p className="font-light text-muted-foreground">123-456-789</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-cormorant text-center mb-12 uppercase tracking-wider">
            программа дня
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">18:00</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">прибытие гостей</h3>
                <p className="text-sm text-muted-foreground">приветственные напитки</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">18:30</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">церемония</h3>
                <p className="text-sm text-muted-foreground">в саду</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">19:00</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">коктейльный час</h3>
                <p className="text-sm text-muted-foreground">праздник и фотосессия</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">21:00</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">прием</h3>
                <p className="text-sm text-muted-foreground">ужин, танцы, празднование</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-cormorant">02:15</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">трансфер</h3>
                <p className="text-sm text-muted-foreground">отправление шаттла</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-cormorant text-center mb-12 uppercase tracking-wider">
            наша история
          </h2>
          
          <div className="prose prose-lg max-w-none text-center font-inter leading-relaxed">
            <p className="text-base mb-6">
              Наша история началась в стенах академии вестфилд, во время школьной поездки в исторический 
              город чарлстон. Именно там, среди мощеных улиц и довоенной архитектуры, 
              наши пути впервые пересеклись. Тогда мы были просто знакомыми, но что-то в нашем 
              совместном смехе и разговорах заложило основу для чего-то необыкновенного.
            </p>
            
            <p className="text-base mb-6">
              Годами мы оставались близкими друзьями, переписывались, делились мечтами и поддерживали 
              друг друга в жизненных приключениях. Мы работали вместе над школьными проектами, выступали 
              в театральных постановках и тянулись к обществу друг друга. Каждый общий момент, 
              каждый разговор углублял нашу связь, хотя мы еще не понимали, к чему это приведет.
            </p>
            
            <p className="text-base mb-6">
              Затем в один прекрасный осенний день все изменилось. Искра, которая тихо тлела 
              в наших сердцах, вспыхнула ярким пламенем. Мы поняли, что то, что у нас было, — это больше, чем 
              дружба — это была любовь. С того момента мы знали, что хотим построить жизнь вместе, 
              создавая новые воспоминания, чтя прекрасное путешествие, которое привело нас сюда.
            </p>
            
            <p className="text-base text-center italic font-cormorant text-lg">
              "два сердца, одно путешествие, бесконечная любовь."
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl sm:text-8xl font-cormorant font-light mb-12 leading-none">
            М
          </div>
          
          <h2 className="text-2xl font-cormorant mb-8 uppercase tracking-wider">
            пожалуйста, ответьте
          </h2>
          
          <p className="text-base font-inter mb-8 leading-relaxed">
            ваше присутствие сделает наш особенный день завершенным. 
            пожалуйста, дайте нам знать, присоединитесь ли вы к нам на праздновании.
          </p>
          
          <div className="space-y-6">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm uppercase tracking-wider font-inter py-6"
              onClick={() => window.open('https://forms.google.com/create', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              ответить через google форму
            </Button>
            
            <div className="pt-6 text-xs font-inter space-y-3">
              <p className="uppercase tracking-wider mb-4">
                альтернативные способы ответа:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-3 h-3" />
                  <span>sara.mark.wedding@email.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-3 h-3" />
                  <span>(555) 123-LOVE</span>
                </div>
                <p>• форма ответа на свадебном сайте</p>
                <p>• обычная почта по нашему адресу</p>
              </div>
            </div>
            
            <Separator className="my-8 bg-primary-foreground/20" />
            
            <p className="text-xs font-inter uppercase tracking-wider">
              просим ответить до <strong>1 декабря 2024</strong> для планирования.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-inter font-light uppercase tracking-wider">
            марк & сара • 29 декабря 2024
          </p>
          <p className="text-xs mt-2 text-muted-foreground font-inter">
            с любовью и ожиданием
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;