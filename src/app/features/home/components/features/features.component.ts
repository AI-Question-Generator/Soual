import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Feature {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

@Component({
  selector: 'soual-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'pi-microchip-ai',
      iconBg: 'bg-main-50',
      title: 'توليد أسئلة بالذكاء الاصطناعي',
      description:
        'ارفع ملف PDF أو أدخل نص الدرس، وسيقوم النظام بإنشاء أسئلة متنوعة متوافقة مع منهج الثانوية العامة المصرية مع تحديد مستوى الصعوبة.',
    },
    {
      icon: 'pi-database',
      iconBg: 'bg-main-50',
      title: 'بنك أسئلة منظم وقابل لإعادة الاستخدام',
      description:
        'أنشئ مكتبة أسئلتك الخاصة، صنّفها حسب المادة والوحدة والمستوى، واستخدمها في إعداد اختبارات جديدة بسهولة.',
    },
    {
      icon: 'pi-stopwatch',
      iconBg: 'bg-main-50',
      title: 'إنشاء اختبارات موقوتة',
      description:
        'كوّن اختبارًا بوقت محدد، اختر نوع الأسئلة ومستوى الصعوبة، وشارك الاختبار مع الطلاب بشكل مباشر.',
    },
    {
      icon: 'pi-book',
      iconBg: 'bg-slate-100',
      title: 'مصمم لمنهج الثانوية العامة المصرية',
      description:
        'منصة موجهة خصيصًا لدعم معلمي وطلاب الثانوية العامة في مصر، مع مراعاة طبيعة الامتحانات ونمط الأسئلة.',
    },
    {
      icon: 'pi-chart-bar',
      iconBg: 'bg-slate-100',
      title: 'تقارير وتحليلات واضحة',
      description:
        'تابع أداء الطلاب بسهولة من خلال تقارير مبسطة تساعدك على تحديد نقاط القوة والاحتياج إلى المراجعة.',
    },
    {
      icon: 'pi-mobile',
      iconBg: 'bg-slate-100',
      title: 'متوافق مع جميع الأجهزة',
      description:
        'استخدم المنصة بكفاءة من الحاسوب أو الهاتف دون التأثير على تجربة الاستخدام أو الأداء.',
    },
  ];
}
