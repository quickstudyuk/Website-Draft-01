const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');
const { createClient } = require('@libsql/client');
const path = require('path');

const dbPath = path.join(process.cwd(), 'dev.db');

const adapter = new PrismaLibSql({
  url: `file:${dbPath}`,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  // 1. Seed Policies
  const policies = [
    {
      slug: 'safeguarding',
      title: 'Safeguarding & Transparency',
      content: `# Safeguarding & Transparency

At QuickStudy, student safety, wellbeing, and transparency are at the heart of everything we do. We are committed to providing a secure online learning environment where students can focus on their education while parents maintain full visibility of their child's learning experience.

## Full Session Transparency

To ensure complete transparency and accountability:

* Every lesson is recorded in its entirety.
* Parents receive access to the full, unedited session recording.
* Parents receive a complete transcript of the tutor-student conversation.
* Parents receive an AI-generated summary of the lesson, including key topics covered, progress made, and any areas requiring further attention.

This level of transparency helps parents stay informed and provides a record of all interactions that take place during lessons.

## Dedicated Safeguarding Oversight

QuickStudy has a designated Safeguarding Lead responsible for overseeing safeguarding procedures and ensuring that students remain protected throughout their learning journey.

Our Safeguarding Lead:

* Monitors safeguarding processes and policies.
* Reviews concerns raised by students, parents, tutors, or staff.
* Oversees lesson recordings and safeguarding systems where necessary.
* Takes appropriate action to protect students from any form of digital harm, inappropriate conduct, or behaviour that falls below our expected standards.

## Professional Learning Environment

All tutors are expected to maintain professional conduct at all times. Lessons are conducted exclusively for educational purposes, and any concerns regarding behaviour, communication, or safeguarding are investigated promptly.

## Shared Responsibility

Safeguarding is a shared responsibility between QuickStudy, tutors, students, and parents. By providing comprehensive lesson records and maintaining active safeguarding oversight, we aim to create a safe, accountable, and trustworthy learning environment for every student.

If you have any safeguarding concerns or questions, please contact our Safeguarding Team immediately, and we will investigate the matter as a priority.`
    },
    {
      slug: 'terms',
      title: 'Terms and Conditions',
      content: `# Terms & Conditions

Clear and transparent terms for using QuickStudy’s tutoring services, Learning Profile system, and QLE learning platform.

## 1. About QuickStudy

QuickStudy provides structured online tutoring services, personalised learning plans, and access to the QuickStudy Learning Environment (QLE), which includes lesson recordings, AI summaries, quizzes, and progress tracking tools.

## 2. Service Usage

By using QuickStudy, you agree that:

* Services are for educational purposes only
* Students must attend scheduled sessions on time
* Parents must provide accurate booking and student information
* Misuse of the platform may result in suspension of access

## 3. Lessons & Scheduling

* All lessons are scheduled in advance
* Students are expected to attend prepared and on time
* Tutors may adapt lesson structure based on student needs
* Missed lessons may not always be rescheduled unless agreed in advance

## 4. Pricing

* All sessions are priced at **£18 per session**
* Pricing is transparent and consistent
* Payments must be made according to the agreed schedule
* Failure to pay may result in suspension of services

## 5. Free Consultation & Free Trial

* Free parent consultations are provided for guidance and academic recommendations
* Free trial lessons are real 1:1 tutoring sessions for students
* Availability is limited and subject to scheduling

## 6. QLE (Learning Environment)

* Lesson recordings and AI-generated learning tools are part of the service
* All QLE content is for personal educational use only
* Users must not share, distribute, or resell any learning materials

## 7. Intellectual Property

All content provided by QuickStudy, including:

* lesson recordings
* AI summaries
* revision materials
* learning resources

remains the intellectual property of QuickStudy and may not be reused commercially.

## 8. Refunds & Cancellations

* Refunds are reviewed on a case-by-case basis
* Cancellations should be made in advance where possible
* Refund eligibility depends on service usage and timing
* Services already delivered may not be refundable

## 9. User Responsibilities

Parents and students agree to:

* provide accurate information
* ensure a suitable learning environment
* respect tutors and staff
* use the platform responsibly

## 10. Limitation Of Liability

QuickStudy aims to provide high-quality educational support, but:

* academic results vary depending on student effort
* no specific grades or outcomes are guaranteed
* we are not responsible for external examination decisions

## 11. Changes To Terms

QuickStudy may update these Terms & Conditions when necessary. Any significant changes will be communicated clearly to users.

## 12. Contact Information

For any questions regarding these Terms & Conditions, users can contact the QuickStudy support team through official communication channels.`
    },
    {
      slug: 'privacy',
      title: 'Privacy Policy',
      content: `# Privacy Policy

We are committed to protecting your personal data and your child’s learning information with transparency, security, and care.

## 1. Information We Collect

We may collect:

* Parent name and contact details
* Student name and academic information
* Learning Profile responses
* Lesson participation data
* Progress tracking data within QLE
* Communication records between parents and tutors

We only collect what is necessary to deliver tutoring and learning support.

## 2. How We Use Information

We use your information to:

* Create personalised Learning Profiles
* Match students with appropriate tutors
* Deliver structured tutoring sessions
* Generate AI lesson summaries and revision materials
* Track academic progress
* Improve learning experience and system quality
* Communicate updates to parents

**We do not sell personal data.**

## 3. Lesson Recordings

All lessons may be recorded securely for:

* student revision purposes
* parent transparency
* learning improvement and quality assurance

Access is limited to:

* student
* parent/guardian
* authorised QuickStudy staff

## 4. QLE (Learning Environment) & AI

Our system may use AI to:

* summarise lessons
* generate quizzes
* create revision materials
* identify learning gaps

AI is used strictly for educational support and not for unrelated profiling or external sharing.

## 5. Data Security

We take data protection seriously and implement:

* secure data storage systems
* restricted access controls
* encryption where appropriate
* internal safeguarding procedures

We aim to protect all student and parent data from unauthorised access.

## 6. Sharing Information

We do NOT sell or trade personal data. We may share limited data only with:

* assigned tutors
* internal academic staff
* trusted technical service providers required to run the platform

All third parties are required to handle data responsibly.

## 7. Parent Rights

Parents have the right to:

* access their data
* request corrections
* request deletion (where applicable)
* manage communication preferences

## 8. Child Safety & Safeguarding

We prioritise student safety through:

* structured and monitored lessons
* transparent communication
* secure platform access
* parent visibility into learning activity

## 9. Data Retention

We only retain data for as long as necessary to:

* provide tutoring services
* maintain learning history
* meet operational and legal requirements

## 10. Third-Party Services

We may use secure third-party tools for:

* hosting services
* communication systems
* analytics and performance tracking

All providers are selected based on security and reliability standards.

## 11. Changes To This Policy

We may update this Privacy Policy when necessary. Any significant changes will be communicated clearly to users.

## 12. Contact Us

For any questions regarding this Privacy Policy, users can contact the QuickStudy support team through official communication channels.`
    },
    {
      slug: 'refund',
      title: 'Refund Policy',
      content: `# Refund & Cancellation Policy

We believe in fairness and transparency. Our policies are designed to protect both our students' learning consistency and our tutors' time.

## 1. Our Commitment to Fairness

At QuickStudy, we aim to provide exceptional academic support. We understand that circumstances can change, and we handle all cancellation and refund requests with fairness, transparency, and respect for families and tutors alike.

## 2. Lesson Cancellations by Students

To ensure our tutors can manage their schedules effectively:

* **24 Hours Notice:** Lessons cancelled at least 24 hours in advance will not be charged, or if prepaid, can be fully refunded or credited toward a future session.
* **Late Cancellations:** Lessons cancelled with less than 24 hours notice may be charged at the full £18 rate to respect the tutor's allocated time.
* **Emergencies:** We understand that genuine emergencies happen. Please contact us as soon as possible, and we will review these on a case-by-case basis.

## 3. Lesson Cancellations by QuickStudy

If a tutor is unable to attend a scheduled lesson due to illness or unforeseen technical difficulties, we will notify you immediately. You will be offered the choice of:

* Rescheduling the lesson to a mutually convenient time.
* Receiving a full refund for that specific session.

## 4. Block Bookings and Prepayments

If you have paid for multiple sessions in advance and decide to discontinue tutoring:

* Any **unused** sessions will be fully refunded.
* Notice of discontinuation must be given before the next scheduled session to avoid a late cancellation charge.
* Completed sessions are non-refundable.

## 5. Dissatisfaction with a Session

We pride ourselves on the quality of our teaching. If you or your child are genuinely dissatisfied with the quality of a specific lesson:

* Please contact us within 48 hours of the lesson taking place.
* We will review the lesson recording (available via the QLE).
* If our standards were not met, we will offer a free replacement session or a full refund for that lesson.

## 6. QuickStudy Learning Environment (QLE)

Access to the QLE (including lesson recordings, AI summaries, and progress tracking) is bundled with your tutoring sessions. Because this is an integrated part of the service, there are no separate standalone charges or specific refunds for QLE access.

## 7. How to Request a Refund

All cancellation or refund requests should be directed to our support team via your parent dashboard or official communication channels. Please include:

* The student's name
* The date and time of the scheduled lesson
* A brief reason for the request

Refunds are typically processed within 5-7 business days to the original payment method.`
    }
  ];

  for (const policy of policies) {
    await prisma.policy.upsert({
      where: { slug: policy.slug },
      update: { content: policy.content, title: policy.title },
      create: { slug: policy.slug, title: policy.title, content: policy.content }
    });
  }
  console.log('Seeded policies: terms, privacy, refund, safeguarding.');

  // 2. Seed FAQs
  const faqs = [
    {
      question: 'What is the Learning Profile?',
      answer: 'The Learning Profile is a free, short diagnostic survey you take before starting. It identifies your child’s academic risks, confidence levels, and learning gaps so we can recommend the exact level of support they need.',
      order: 1
    },
    {
      question: 'What is the 60-second Learning Profile diagnostic?',
      answer: "It is our quick diagnostic profiling survey designed to pinpoint your child's specific academic risks, confidence gaps, and knowledge strengths before they start tutoring. This allows us to build the perfect structured roadmap tailored to their exam board.",
      order: 2
    },
    {
      question: 'What makes QuickStudy different from traditional tutoring?',
      answer: 'Traditional hourly tutors only support students during the lesson. QuickStudy provides a complete learning system. Every student receives a structured learning plan, 1:1 lessons with expert tutors, and our QuickStudy Learning Environment (QLE) which includes lesson recordings, AI summaries, revision notes, active-recall quizzes, and progress tracking.',
      order: 3
    },
    {
      question: 'What is the QuickStudy Learning Environment (QLE)?',
      answer: 'QLE is our proprietary learning platform. It is a secure digital hub where students can access their past lesson recordings, automatically generated AI revision summaries, practice quizzes, and where parents can track measurable progress week by week.',
      order: 4
    },
    {
      question: 'How do the AI tools help my child study?',
      answer: 'After every lesson, our AI systems automatically analyze the recording to generate bite-sized summaries, custom revision notes matching their exact exam board syllabus, and active-recall quizzes to reinforce understanding between sessions.',
      order: 5
    },
    {
      question: 'Are there hidden fees?',
      answer: 'No. Our pricing is completely transparent. The price you see is the price you pay per session.',
      order: 6
    },
    {
      question: 'Can I change lesson frequency?',
      answer: "Absolutely. You can increase or decrease the number of weekly sessions as your child's needs change.",
      order: 7
    },
    {
      question: 'What happens if I miss a lesson?',
      answer: 'You can reschedule with advance notice, and because all sessions are recorded, your child never completely misses out on the learning material.',
      order: 8
    },
    {
      question: 'Can I stop at any time?',
      answer: 'Yes. There are no lock-in contracts or long-term commitments required.',
      order: 9
    },
    {
      question: 'Do I receive access to QLE?',
      answer: 'Yes. Full access to the QuickStudy Learning Environment (QLE) is included with all tutoring support.',
      order: 10
    },
    {
      question: 'How quickly can I expect results?',
      answer: 'While every child is different, 96% of our parents report noticeable improvements in confidence and understanding within the first two months.',
      order: 11
    }
  ];

  for (const faq of faqs) {
    // We can upsert by finding by question name
    const existing = await prisma.fAQ.findFirst({
      where: { question: faq.question }
    });
    if (existing) {
      await prisma.fAQ.update({
        where: { id: existing.id },
        data: { answer: faq.answer, order: faq.order }
      });
    } else {
      await prisma.fAQ.create({
        data: faq
      });
    }
  }
  console.log('Seeded FAQs.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
