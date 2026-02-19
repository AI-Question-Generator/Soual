import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'soual-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './faq.component.html',
  imports: [NgClass],
})
export class FaqComponent {
  openIndex = signal<number | null>(0);

  faqs: FaqItem[] = [
    {
      question: 'كيف يقوم الذكاء الاصطناعي بتوليد الأسئلة؟',
      answer:
        'يقوم النظام بتحليل النص أو الملف المرفق (PDF) وفهم السياق والمفاهيم الأساسية، ثم يقوم بصياغة أسئلة دقيقة بناءً على المعايير التربوية، مع توفير الإجابات الصحيحة والتفسيرات.',
    },
    {
      question: 'هل الأسئلة متوافقة مع المناهج الدراسية؟',
      answer:
        'نعم، تم تدريب نماذجنا مع مراعاة المناهج الدراسية في المنطقة العربية، ويمكنك تخصيص مستوى الصعوبة ونوع الأسئلة لتناسب المرحلة التعليمية المستهدفة.',
    },
    {
      question: 'هل يمكنني تعديل الأسئلة بعد توليدها؟',
      answer:
        'بالتأكيد. يمكنك مراجعة جميع الأسئلة المولدة، وتعديل نص السؤال، الخيارات، أو الإجابة الصحيحة قبل حفظها في بنك الأسئلة أو استخدامها في الاختبارات.',
    },
    {
      question: 'ما هي أنواع الأسئلة التي يمكن إنشاؤها؟',
      answer:
        'يدعم النظام حالياً أسئلة الاختيار من متعدد، الصواب والخطأ، والأسئلة المقالية القصيرة. ونعمل على إضافة المزيد من الأنواع قريباً.',
    },
    {
      question: 'هل يمكن للطلاب استخدام المنصة مباشرة؟',
      answer:
        'نعم، يمكن للمعلمين مشاركة روابط الاختبارات مع الطلاب، ويمكن للطلاب الدخول لحل الاختبارات والحصول على تغذية راجعة فورية (حسب إعدادات الاختبار).',
    },
  ];

  toggle(index: number) {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
