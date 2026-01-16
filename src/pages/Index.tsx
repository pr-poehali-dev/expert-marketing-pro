import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Отправка цели в Яндекс.Метрику
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106231633, 'reachGoal', 'consultation_form_submit');
    }
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const downloadChecklist = () => {
    // Отправка цели в Яндекс.Метрику
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106231633, 'reachGoal', 'checklist_download');
    }
    const checklistContent = `
ЧЕК-ЛИСТ ПОДГОТОВКИ КАРТОЧКИ ТОВАРА К ЗАГРУЗКЕ НА МАРКЕТПЛЕЙСЫ

1. АНАЛИТИКА И СТРАТЕГИЯ
   ☐ Проведен анализ спроса на товар
   ☐ Изучены конкуренты и их карточки
   ☐ Определена целевая аудитория
   ☐ Сформулировано УТП (уникальное торговое предложение)

2. КОНТЕНТ КАРТОЧКИ
   ☐ Название содержит ключевые запросы (до 200 символов)
   ☐ Описание раскрывает выгоды для покупателя
   ☐ Указаны все характеристики товара
   ☐ Прописаны преимущества перед конкурентами

3. ВИЗУАЛЬНАЯ ЧАСТЬ
   ☐ Главное фото показывает товар крупным планом
   ☐ Подготовлено 5-8 фотографий с разных ракурсов
   ☐ Добавлены инфографики с характеристиками
   ☐ Показаны варианты использования товара
   ☐ Соблюдены требования площадки по размеру и качеству

4. ЦЕНООБРАЗОВАНИЕ
   ☐ Цена конкурентоспособна в нише
   ☐ Учтены комиссии маркетплейса
   ☐ Рассчитана маржинальность
   ☐ Запланированы акции и скидки

5. SEO-ОПТИМИЗАЦИЯ
   ☐ В название добавлены ключевые слова
   ☐ Описание содержит поисковые запросы
   ☐ Заполнены все атрибуты товара
   ☐ Указаны синонимы и альтернативные названия

6. ПЕРЕД ПУБЛИКАЦИЕЙ
   ☐ Проверена орфография и пунктуация
   ☐ Карточка просмотрена на мобильном устройстве
   ☐ Все поля заполнены согласно требованиям площадки
   ☐ Подготовлен план продвижения после публикации

Экспертная поддержка: marketplace-expert.ru
    `;

    const blob = new Blob([checklistContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'checklist-kartochka-tovara.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('Чек-лист успешно скачан!');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-2xl text-secondary">
              Нейромейкер
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#why" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
              <Button onClick={downloadChecklist} size="sm" className="bg-red-600 text-white hover:bg-red-700 border-0 rounded-full">
                <Icon name="Download" size={16} className="mr-2" />
                Чек-лист
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/files/Обложка 1.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
                Маркетолог-аналитик: найду точки роста прибыли
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 leading-relaxed">
                Я, Анатолий Караулов – эксперт-маркетолог (нейромейкер), Ваш надежный партнер в мире онлайн-торговли
              </p>
              <p className="text-lg mb-8 text-white/80 leading-relaxed">
                Проанализирую спрос на товар, конкурентов и целевую аудиторию, чтобы ваша карточка работала на вас. Покажу, где теряешь до 40% продаж
              </p>
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-6 h-auto animate-scale-in animate-pulse-glow rounded-full">
                <a href="#contact">Получить консультацию</a>
              </Button>
            </div>
            <div className="animate-slide-in-right hidden md:block">
              <img 
                src="https://cdn.poehali.dev/files/Обложка 1.png" 
                alt="Эксперт по маркетплейсам" 
                className="rounded-2xl shadow-2xl animate-float hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/ec941e82-cfd5-41bd-9d45-9a0a99f4b272/files/0b6a4d94-0bdf-47b7-b8f9-2e839c820cac.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl text-center mb-6 text-secondary">
              Кто я и чем полезен
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl flex-shrink-0">
                <img 
                  src="https://cdn.poehali.dev/files/Фото А.Караулов.jpg" 
                  alt="Анатолий Караулов - эксперт маркетолог" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Моя задача — помочь вам выбрать прибыльную нишу и создать карточки товаров, которые будут продавать. 
                  Я предлагаю комплексную услугу, которая сэкономит ваше время, даст точное понимание спроса и обеспечит 
                  уверенность в каждом шаге. Вы получите привлекательные карточки, готовые к продаже, и четкий план действий.
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-semibold text-2xl mb-8 text-secondary">
                Что вы получите?
              </h3>
              <p className="text-lg text-muted-foreground">
                В структуре нашей работы вы найдете все необходимое для успешного старта и развития на маркетплейсах.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-16 text-secondary">
            Что входит в услугу
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'TrendingUp',
                title: 'Анализ спроса на товары и услуги',
                description: 'Изучаю тренды, частоту запросов и динамику продаж по категориям, чтобы понять, что действительно покупают.'
              },
              {
                icon: 'Users',
                title: 'Анализ конкурентов',
                description: 'Смотрю сильных игроков, их цены, УТП, оформление карточек и отзывы, чтобы найти точки преимущества для вашего продукта.'
              },
              {
                icon: 'Target',
                title: 'Анализ целевой аудитории',
                description: 'Определяю, кто ваши покупатели, что для них важно и за что они готовы платить, чтобы выстроить правильное позиционирование.'
              },
              {
                icon: 'BarChart3',
                title: 'Оценка объёма и роста рынка',
                description: 'Проверяю, растёт ли категория, насколько она ёмкая и не находится ли спрос на плато или в падении.'
              },
              {
                icon: 'Database',
                title: 'Сохранение всей аналитики',
                description: 'Подготавливаю структурированный отчёт в удобном формате (таблица, документ или онлайн-дашборд) для дальнейшей работы.'
              },
              {
                icon: 'FileText',
                title: 'Создание и оптимизация карточек',
                description: 'Разрабатываю структуру, тексты, выгоды, дизайн и визуалы для карточек под Ozon, Wildberries и другие площадки.'
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-secondary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/ec941e82-cfd5-41bd-9d45-9a0a99f4b272/files/9416de18-3da5-4e4a-b693-574b9fd8c650.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading font-bold text-4xl text-center mb-16 text-secondary">
            Что вы получите на выходе
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'Lightbulb',
                title: 'План действий',
                description: 'Чёткое понимание, стоит ли заходить в нишу: цифры по спросу, конкуренции, целевой аудитории, объёму и перспективам рынка.'
              },
              {
                icon: 'ClipboardCheck',
                title: 'Готовый отчёт',
                description: 'Список рекомендаций по позиционированию и ассортименту, чтобы вы не тратили бюджет на «слепой» запуск.'
              },
              {
                icon: 'ShoppingCart',
                title: 'Карточки, готовые к загрузке',
                description: 'Полностью подготовленные карточки товаров, которые можно сразу загружать на маркетплейсы, — с продуманными текстами, структурой и визуалом под вашу нишу.'
              }
            ].map((result, idx) => (
              <Card key={idx} className="text-center border-2 hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={result.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 text-secondary">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-6 text-secondary">
            Почему именно я?
          </h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Глубокое понимание алгоритмов маркетплейсов позволяют мне предлагать системные и эффективные решения. 
            Я работаю на результат, чтобы ваш бизнес рос и процветал.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'Store',
                title: 'Фокус на маркетплейсах',
                description: 'Работа с российскими площадками и понимание их требований к карточкам, ценам и контенту.'
              },
              {
                icon: 'Layers',
                title: 'Системный подход',
                description: 'Сначала аналитика ниши и рынка, затем стратегия и только после этого создание карточек, а не наоборот.'
              },
              {
                icon: 'Award',
                title: 'Ориентация на результат',
                description: 'Цель — не просто сделать «красивые» карточки, а дать вам нишу и оформление, которые повышают шансы на продажи и масштабирование.'
              }
            ].map((advantage, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon} size={40} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-secondary">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
            Реальные кейсы
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Примеры работ с конкретными цифрами и результатами
          </p>
          
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="mb-6">
                      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Кейс по оформлению карточки товара
                      </span>
                      <h3 className="font-heading font-bold text-3xl mb-4 text-secondary">
                        Туфли IERDI Классика
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Как перезапуск карточки "Туфли IERDI Классика" повысил доверие к бренду и конверсию карточки
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-heading font-semibold text-xl mb-3 text-secondary flex items-center gap-2">
                          <Icon name="Target" size={24} className="text-primary" />
                          Проблема
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Карточка не подчеркивала ключевое УТП бренда — замша и комфорт при ежедневной носке</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Ракурсов много, но все однотипные, без инфографики</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Покупатель не понимает, как туфли сидят на ноге и подойдут ли под его стиль</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-xl mb-3 text-secondary flex items-center gap-2">
                          <Icon name="CheckCircle2" size={24} className="text-primary" />
                          Решение
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Визуально выделили модель в выдаче за счет сильной обложки и продуманного визуала</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Повысили конверсию карточки и увеличили количество заказов модели</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Снизили сомнения по размеру, полноте и назначению туфель</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-primary/5 p-6 rounded-lg">
                        <h4 className="font-heading font-semibold text-xl mb-4 text-secondary flex items-center gap-2">
                          <Icon name="TrendingUp" size={24} className="text-primary" />
                          Результаты
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Конверсия карточки</p>
                            <p className="font-bold text-2xl text-primary">Y% → Z%</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Заказы в месяц</p>
                            <p className="font-bold text-2xl text-primary">X → X·k</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">CTR из выдачи</p>
                            <p className="font-bold text-2xl text-primary">A% → B%</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Добавления в избранное</p>
                            <p className="font-bold text-2xl text-primary">N → M шт/мес</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">ДО: Карточка до работы</p>
                      <div className="grid grid-cols-4 gap-2 mb-6">
                        <img src="https://cdn.poehali.dev/files/Кейс Карточка товара_page-0001.jpg" alt="До работы" className="w-full rounded-lg border-2 border-muted" />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-primary mb-3">ПОСЛЕ: Обновленная карточка</p>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <img 
                            key={i}
                            src="https://cdn.poehali.dev/files/Кейс Карточка товара_page-0003.jpg" 
                            alt={`После работы ${i}`}
                            className="w-full rounded-lg border-2 border-primary shadow-lg hover:scale-105 transition-transform"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/ec941e82-cfd5-41bd-9d45-9a0a99f4b272/files/0b6a4d94-0bdf-47b7-b8f9-2e839c820cac.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading font-bold text-4xl text-center mb-4 text-secondary">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Реальные результаты предпринимателей, которые доверили мне запуск своих товаров на маркетплейсах
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Елена Смирнова',
                business: 'Товары для дома',
                text: 'За 2 месяца работы продажи выросли в 3 раза! Аналитика ниши помогла избежать ошибок, а карточки сразу начали конвертировать. Очень довольна результатом.',
                rating: 5
              },
              {
                name: 'Дмитрий Козлов',
                business: 'Спортивные товары',
                text: 'Профессиональный подход к делу. Получил не просто красивые карточки, а реально работающую стратегию продвижения. Рекомендую!',
                rating: 5
              },
              {
                name: 'Анна Петрова',
                business: 'Детские товары',
                text: 'Благодаря детальной аналитике рынка выбрала правильную нишу. Карточки оформлены идеально, покупатели оставляют положительные отзывы. Спасибо за работу!',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-heading font-semibold text-secondary">
                      {review.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {review.business}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white mb-12">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Начните свой путь к успеху
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Опишите вашу идею или текущую нишу в короткой заявке для анализа и получения рекомендаций. 
              Оставьте заявку на бесплатную консультацию по вашей нише прямо сейчас!
            </p>
          </div>
          <Card className="max-w-xl mx-auto animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите вашу нишу или идею товара"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white text-lg h-14 rounded-full animate-pulse-glow">
                  Оформить карточку товара
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-center font-heading font-semibold text-lg mb-4 text-secondary">
                  Мои контакты
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://max.ru/u/f9LHodD0cOIkaRTK8IHu3XqqA6Yo7V1cujLwDhw5flDx1Qu6RXmUBEVC8HE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).ym) {
                        (window as any).ym(106231633, 'reachGoal', 'click_max_messenger');
                      }
                    }}
                  >
                    <Icon name="MessageCircle" size={20} />
                    <span>Мессенджер MAX</span>
                  </a>
                  <a 
                    href="https://t.me/KavNewBot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).ym) {
                        (window as any).ym(106231633, 'reachGoal', 'click_telegram');
                      }
                    }}
                  >
                    <Icon name="Send" size={20} />
                    <span>Telegram</span>
                  </a>
                  <a 
                    href="mailto:uzso-to@ya.ru" 
                    className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).ym) {
                        (window as any).ym(106231633, 'reachGoal', 'click_email');
                      }
                    }}
                  >
                    <Icon name="Mail" size={20} />
                    <span>uzso-to@ya.ru</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 bg-secondary text-white/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-heading font-bold text-xl text-white">
              Нейромейкер
            </div>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-white transition-colors">О компании</a>
              <a href="#services" className="hover:text-white transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
            </div>
            <div className="text-sm">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;