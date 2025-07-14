import {
  MapPin,
  Calendar,
  Clock,
  Heart,
  ExternalLink,
  Camera,
  Phone,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("August 17, 2025 15:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Minimal with large letter */}
      <section className="section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <div className="space-y-2 mb-8">
              <p className="text-sm uppercase tracking-[0.2em] font-inter font-light text-muted-foreground">
                Мы приглашаем вас присоединиться к
              </p>
              <p className="text-sm uppercase tracking-[0.2em] font-inter font-light text-muted-foreground">
                нашей свадьбе
              </p>
            </div>
            <div className="text-9xl sm:text-[12rem] md:text-[16rem] font-cormorant font-light text-primary leading-none">
              A
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-light text-primary">
              <div>A Л Е К С А Н Д Р А</div>
              <div className="italic text-2xl sm:text-3xl md:text-4xl my-4 font-light">
                и
              </div>
              <div>И Л Ь Я</div>
            </div>

            <div className="text-9xl sm:text-[12rem] md:text-[16rem] font-cormorant font-light text-primary mb-8 leading-none">
              И
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden rounded-md">
              <img
                src="./images/w1.JPG"
                alt="Wedding photo 1"
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-[3/4] bg-muted overflow-hidden rounded-md">
              <img
                src="./images/w2.JPG"
                alt="Wedding photo 2"
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <div className="aspect-[3/4] bg-muted overflow-hidden rounded-md">
              <img
                src="./images/w3.JPG"
                alt="Wedding photo 3"
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl sm:text-6xl font-cormorant font-light text-primary mb-12 leading-none">
            Д Е Т А Л И
          </div>

          <div className="space-y-8 text-sm font-inter">
            <div>
              <div className="pt-8 space-y-2">
                <div className="text-sm uppercase tracking-[0.2em] font-inter font-light">
                  17 августа 2025
                </div>
                <div className="text-sm uppercase tracking-[0.2em] font-inter font-light">
                  15:00
                </div>
                <div className="text-sm uppercase tracking-[0.2em] font-inter font-light">
                  Воскресенье
                </div>
                <div className="text-xs uppercase tracking-[0.2em] font-inter font-light text-muted-foreground pt-2">
                  Дзержинский р-н, д. Новинка, ул. Центральная, 17
                </div>

                {/* Google Maps Link */}
              </div>
              <div className="mt-8">
                <a
                  href="https://www.google.com/maps?q=53.7501138,27.2966668&entry=gps&lucs=,94275320,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjI3LjEuNzc3NjcxOTc0MBgAINeCAypaLDk0Mjc1MzIwLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0QgJCWQ%3D%3D&skid=aecb2303-acad-4b24-b8e8-8fdf4c81cad2&g_st=it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-4 border border-primary/30 text-xs uppercase tracking-wider font-inter text-primary/80 hover:bg-primary/5 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" /> Посмотреть на карте
                </a>
              </div>
              <div className="aspect-[3/4] bg-muted overflow-hidden rounded-md mt-8">
                <img
                  src="./images/w5.png"
                  alt="Wedding photo 5"
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-5xl sm:text-6xl font-cormorant font-light text-primary mb-12 leading-none text-center">
            Т А Й М И Н Г
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">15:00</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">Прибытие гостей</h3>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">15:30</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">Выездная церемония</h3>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">16:00 - 23:00</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">Празничный банкет</h3>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-lg font-cormorant">23:15</span>
              <div className="text-right">
                <h3 className="font-inter font-medium">
                  Отправление трансфера{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-16 px-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-cormorant text-center mb-12 uppercase tracking-wider">
              Наша история
            </h2>

            <div className="prose prose-lg max-w-none text-center font-inter leading-relaxed">
              <p className="text-base mb-6">
                Наша история началась в стенах Лицея №2, во время поездки в
                Гродно. Именно там, среди новых впечатлений и оживленных
                разговоров, наши пути впервые пересеклись. Тогда мы были просто
                знакомыми, но что-то в наших улыбках и взглядах заложило
                фундамент для чего-то большего.Долгое время мы оставались
                друзьями, обмениваясь сообщениями, шутками и поддержкой. Мы
                вместе участвовали в общественной деятельности лицея, организуя
                мероприятия и деля сцену во время выступлений. Каждый совместный
                проект, каждая репетиция сближали нас, хотя мы еще не
                осознавали, куда приведет эта связь. Но в один особенный день
                всё изменилось. Искра, что тлела в наших сердцах, вспыхнула
                ярким пламенем, и мы поняли, что уже не можем быть просто
                друзьями.
              </p>

              <p className="text-base mb-6">
                Вместе мы сияли на сцене, ведя выпускной вечер, где смех,
                взгляды и общие моменты стали началом нашей любви. С того дня
                прошло четыре года, и каждый из них был наполнен теплом,
                приключениями и взаимопониманием. Мы стали не просто парой, а
                настоящими партнерами, которые вместе растут, мечтают и
                преодолевают все преграды. Теперь, стоя рука об руку, мы готовы
                к новой главе нашей истории. Мы не можем дождаться, чтобы
                разделить нашу любовь и радость с вами, когда мы сделаем
                следующий шаг вместе!
              </p>

              <p className="text-base text-center italic font-cormorant text-lg">
                "два сердца, одно путешествие, бесконечная любовь."
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Photo - Takes half screen width with no padding */}
        <div className="w-full md:w-1/2 h-[100vh] overflow-hidden">
          <img
            src="./images/w4.JPG"
            alt="Couple story photo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl sm:text-4xl font-cormorant font-light text-primary mb-12 leading-none whitespace-nowrap">
            Д Р Е С С&#8209;К О Д
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-base font-inter leading-relaxed">
              Для нас самое главное ваше присутствие!
              <br />
              Но мы будем очень благодарны, если поддержите
              <br />
              дресс-код нашей свадьбы!
            </p>
          </div>

          <div className="py-6 border-y border-primary/20">
            <h3 className="text-3xl font-cormorant font-light tracking-widest mb-8 whitespace-nowrap">
              OLD MONEY
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              {/* For Ladies */}
              <div className="space-y-4">
                <h4 className="font-inter uppercase tracking-widest text-xs whitespace-nowrap">
                  Для дам
                </h4>
                <ul className="text-sm space-y-2 text-muted-foreground font-inter">
                  <li>Элегантные платья миди или макси длины</li>
                  <li>Пастельные и приглушенные тона</li>
                  <li>Натуральные ткани (шёлк, лён, хлопок)</li>
                  <li>Минималистичные украшения</li>
                </ul>
              </div>
              <div className="flex justify-center gap-6 mt-6">
              {[
                "rgb(202, 212, 213)",
                "rgb(249, 237, 239)",
                "rgb(220, 191, 183)",
                "rgb(228, 200, 183)",
                "rgb(168, 187, 162)",
              ].map((color) => (
                <span
                  key={color}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
              {/* For Gentlemen */}
              <div className="space-y-4">
                <h4 className="font-inter uppercase tracking-widest text-xs whitespace-nowrap">
                  Для господ
                </h4>
                <ul className="text-sm space-y-2 text-muted-foreground font-inter">
                  <li>Светлые костюмы или брюки с рубашкой</li>
                  <li>Нейтральная цветовая палитра</li>
                  <li>Классический крой</li>
                  <li>Минимум аксессуаров</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-8">
            <img
              src="./images/w9.jpeg"
              alt="Ladies dress code inspiration"
              className="w-38 h-48 object-cover rounded-md"
            />
            <img
              src="./images/w10.jpeg"
              alt="Gentlemen dress code inspiration"
              className="w-38 h-48 object-cover  rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-3xl font-cormorant font-light text-primary mb-8">
            <span className="whitespace-nowrap">До нашей свадьбы</span>{" "}
            <span className="whitespace-nowrap">осталось</span>
          </div>

          <div className="flex justify-center items-center max-w-3xl mx-auto py-4">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-cormorant font-light text-primary mb-2">
                {timeLeft.days.toString().padStart(3, "0")}
              </div>
              <div className="text-xs uppercase tracking-widest font-inter text-muted-foreground whitespace-nowrap">
                дней
              </div>
            </div>

            {/* Delimiter */}
            <div className="flex flex-col items-center mx-2 sm:mx-4 md:mx-10 mt-2">
              <div className="text-5xl font-cormorant font-light text-primary mb-2">
                :
              </div>
              <div className="text-xs h-4"></div>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-cormorant font-light text-primary mb-2">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-xs uppercase tracking-widest font-inter text-muted-foreground whitespace-nowrap">
                часов
              </div>
            </div>

            {/* Delimiter */}
            <div className="flex flex-col items-center mx-2 sm:mx-4 md:mx-10 mt-2">
              <div className="text-5xl font-cormorant font-light text-primary mb-2">
                :
              </div>
              <div className="text-xs h-4"></div>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-cormorant font-light text-primary mb-2">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-xs uppercase tracking-widest font-inter text-muted-foreground whitespace-nowrap">
                минут
              </div>
            </div>

            {/* Delimiter */}
            <div className="flex flex-col items-center mx-2 sm:mx-4 md:mx-10 mt-2">
              <div className="text-5xl font-cormorant font-light text-primary mb-2">
                :
              </div>
              <div className="text-xs h-4"></div>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-cormorant font-light text-primary mb-2">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-xs uppercase tracking-widest font-inter text-muted-foreground whitespace-nowrap">
                секунд
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl sm:text-8xl font-cormorant font-light mb-12 leading-none">
            А & И
          </div>

          <h2 className="text-2xl font-cormorant mb-8 uppercase tracking-wider">
            Ждем вашего ответа
          </h2>

          <p className="text-base font-inter mb-8 leading-relaxed">
            Мы с нетерпением ждем встречи с вами! Если вы привезете с собой
            гостя или у вас есть особые диетические ограничения, пожалуйста,
            укажите это ниже.
          </p>

          <div className="space-y-6">
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm uppercase tracking-wider font-inter py-6"
              onClick={() =>
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSftorLXXusD0r6MyoRZp-etIG6fsbT9MIkGjuSSCN6qfVdnGg/viewform", "_blank")
              }
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ответить через google форму
            </Button>

            <div className="pt-6 text-xs font-inter space-y-3">
              <p className="uppercase tracking-wider mb-4">
                Альтернативные способы ответа:
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
              </div>
            </div>

            <Separator className="my-8 bg-primary-foreground/20" />

            <p className="text-xs font-inter uppercase tracking-wider">
              Просим сообщить нам до <strong>1 августа 2025 года</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-inter font-light uppercase tracking-wider">
            Александра & Илья • 17 августа 2025
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
