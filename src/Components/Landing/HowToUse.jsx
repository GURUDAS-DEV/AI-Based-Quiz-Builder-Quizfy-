import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPlus, 
  FaEdit, 
  FaUsers, 
  FaChartBar, 
  FaRobot,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaLightbulb,
  FaPlay,
  FaShareAlt,
  FaLayerGroup,
  FaChartLine
} from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'

const HowToUse = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [expandedStep, setExpandedStep] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }

  const sections = [
    {
      id: 'getting-started',
      title: '🚀 Getting Started',
      icon: <FaPlus className='text-2xl' />,
      steps: [
        {
          title: 'Create Your First Presentation',
          desc: 'Log in to your account and click the "Create Presentation" button. Give your presentation a catchy name and select a template.',
          details: 'Choose from our pre-built templates or start with a blank canvas. You can always change the background and theme later.'
        },
        {
          title: 'Navigate the Dashboard',
          desc: 'Familiarize yourself with the main dashboard. You\'ll see options to create, edit, join, and manage your presentations.',
          details: 'The sidebar shows your presentations, templates, and shared presentations. Use the search bar to find presentations quickly.'
        },
        {
          title: 'Understand the Slide Structure',
          desc: 'Each slide in your presentation represents a single question. You can add, edit, delete, or reorder slides easily.',
          details: 'Slides are interconnected - reordering affects the entire question flow. Use the preview feature to see how your presentation will look.'
        }
      ]
    },
    {
      id: 'create-questions',
      title: '❓ Creating Questions',
      icon: <FaEdit className='text-2xl' />,
      steps: [
        {
          title: 'Choose Question Type',
          desc: 'Quizify supports 5 types of questions: Quiz, Ranking, Poll, Pie, and Donut.',
          details: 'Each type serves different purposes:\n• Quiz: Traditional multiple choice questions\n• Ranking: Ask users to rank items\n• Poll: Simple yes/no or opinion questions\n• Pie & Donut: Visual comparison charts'
        },
        {
          title: 'Quiz Questions',
          desc: 'Perfect for testing knowledge. Add a question, provide 4-5 options, and mark the correct answer.',
          details: 'You can add images to each option, set time limits, and even add hints. Students will receive immediate feedback.'
        },
        {
          title: 'Ranking Questions',
          desc: 'Ask participants to rank items from best to worst. Great for preferences and priorities.',
          details: 'Perfect for team-building exercises, gathering opinions, or determining priorities. See live ranking results in real-time.'
        },
        {
          title: 'Poll Questions',
          desc: 'Simple opinion gathering. Create yes/no, agree/disagree, or custom multiple-choice options.',
          details: 'Polls are quick and engage the audience. Results update in real-time with visual representations.'
        },
        {
          title: 'Pie & Donut Charts',
          desc: 'Present data in visual format. Users select their choice and contribute to the pie/donut chart.',
          details: 'Great for market research, surveys, and data visualization. Results are displayed as beautiful, interactive charts.'
        }
      ]
    },
    {
      id: 'customize-questions',
      title: '🎨 Customizing Questions',
      icon: <FaLayerGroup className='text-2xl' />,
      steps: [
        {
          title: 'Add Backgrounds',
          desc: 'Each question can have its own unique background. Choose from 16 pre-built templates or upload your own image.',
          details: 'Backgrounds help create visual variety and improve engagement. Select templates that match your presentation theme.'
        },
        {
          title: 'Edit Content',
          desc: 'Modify question text, answer options, and formatting. Use the rich text editor for styling.',
          details: 'You can add emojis, change font sizes, and add descriptions to make questions more engaging.'
        },
        {
          title: 'Add Media',
          desc: 'Enhance questions with images, icons, or visual indicators to guide participants.',
          details: 'Media makes questions more memorable and helps explain complex concepts visually.'
        },
        {
          title: 'Set Time Limits',
          desc: 'Control how long participants have to answer. Set different time limits for different question types.',
          details: 'Time limits keep the session moving and add an element of challenge. You can disable timers for certain questions.'
        }
      ]
    },
    {
      id: 'ai-powered',
      title: '🤖 AI-Powered Features',
      icon: <FaRobot className='text-2xl' />,
      steps: [
        {
          title: 'Generate Presentations with AI',
          desc: 'Simply write a prompt describing what you want to learn about, and our AI will create a complete presentation for you!',
          details: 'Example prompts:\n• "Create a quiz about Python programming basics"\n• "Make a fun presentation about solar system facts"\n• "Build a ranking exercise for team values"\nOur AI generates relevant questions with correct answers automatically.'
        },
        {
          title: 'AI Customization',
          desc: 'After AI generates your presentation, you can edit any question, add images, change backgrounds, or adjust the difficulty.',
          details: 'The AI-generated content is just the starting point. Personalize it to match your specific needs and style.'
        },
        {
          title: 'Smart Question Generation',
          desc: 'Use AI to generate questions on any topic. Perfect for teachers creating assessments or team leads building training materials.',
          details: 'The AI understands context and creates varied question types to test different aspects of knowledge.'
        }
      ]
    },
    {
      id: 'manage-sharing',
      title: '👥 Managing & Sharing',
      icon: <FaUsers className='text-2xl' />,
      steps: [
        {
          title: 'Add Admin Members',
          desc: 'Invite other users to co-manage your presentation. Admins can edit questions and moderate live sessions.',
          details: 'Perfect for collaborative content creation. Each admin can make real-time edits to questions and settings.'
        },
        {
          title: 'Generate Session Codes',
          desc: 'Create unique codes that participants use to join your live quiz. Each session has its own code.',
          details: 'Codes are case-insensitive, easy to remember, and can be regenerated at any time. Share them via email, messaging, or display them on screen.'
        },
        {
          title: 'Share Presentations',
          desc: 'Share read-only copies with colleagues or students. They can review content but can\'t modify it.',
          details: 'Great for giving colleagues access to your content for reference or feedback before going live.'
        }
      ]
    },
    {
      id: 'go-live',
      title: '📡 Going Live',
      icon: <MdLiveTv className='text-2xl' />,
      steps: [
        {
          title: 'Start a Live Session',
          desc: 'Begin your live quiz session. Participants join using the session code you provide.',
          details: 'Once live, you control the pace. Move through questions at your own speed, and see live responses from all participants.'
        },
        {
          title: 'Admin Controls',
          desc: 'As the admin, you can: skip questions, reveal/hide answers, show live results, and adjust timing.',
          details: 'You have full control over the session flow. Pause to discuss answers, go back to previous questions, or skip ahead as needed.'
        },
        {
          title: 'User Participation',
          desc: 'Participants see questions on their devices and respond in real-time. They can\'t see others\' answers (unless you choose to reveal).',
          details: 'Results are aggregated and displayed beautifully. Participants feel engaged knowing their vote matters.'
        },
        {
          title: 'Live Analytics',
          desc: 'Watch real-time charts and statistics as participants respond. See participation rates, correct answers, and trending responses.',
          details: 'Analytics help you identify areas where participants struggle. Use this data to guide discussions.'
        }
      ]
    },
    {
      id: 'analytics',
      title: '📊 Analytics & Reports',
      icon: <FaChartBar className='text-2xl' />,
      steps: [
        {
          title: 'View Session Analytics',
          desc: 'After a live session ends, access detailed analytics showing how participants performed.',
          details: 'See percentage breakdowns, time spent per question, and average scores.'
        },
        {
          title: 'Question Performance',
          desc: 'Identify which questions were most difficult or had the highest participation rates.',
          details: 'This data helps you refine future presentations and identify topics needing more explanation.'
        },
        {
          title: 'Download Reports',
          desc: 'Export analytics as PDF or CSV for sharing with stakeholders or archival purposes.',
          details: 'Reports include all question data, participant responses, and timing information.'
        }
      ]
    }
  ]

  const tips = [
    {
      icon: <FaLightbulb className='text-yellow-500 text-2xl' />,
      title: 'Pro Tip: Use Variety',
      desc: 'Mix different question types to keep participants engaged. Don\'t overuse one format.'
    },
    {
      icon: <FaPlay className='text-red-500 text-2xl' />,
      title: 'Pro Tip: Test First',
      desc: 'Always preview your presentation before going live. Check timing, images, and answer options.'
    },
    {
      icon: <FaShareAlt className='text-blue-500 text-2xl' />,
      title: 'Pro Tip: Plan Discussions',
      desc: 'Use the pause feature to discuss correct answers and help participants learn from mistakes.'
    },
    {
      icon: <FaChartLine className='text-green-500 text-2xl' />,
      title: 'Pro Tip: Use Analytics',
      desc: 'Review analytics after each session to improve future presentations and identify learning gaps.'
    }
  ]

  return (
    <div className='font-Outfit bg-white text-gray-800 overflow-hidden'>
      {/* Hero Section */}
      <motion.section
        className='w-full bg-gradient-to-r from-indigo-600 to-indigo-800 py-16 px-6 text-white text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className='text-4xl md:text-5xl font-bold mb-4'
          variants={fadeIn}
          initial='hidden'
          animate='show'
        >
          How to Create Amazing Quizzes
        </motion.h1>
        <motion.p
          className='text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto'
          variants={fadeIn}
          initial='hidden'
          animate='show'
        >
          Master Quizify in a few simple steps. From creating presentations to going live with your audience.
        </motion.p>
      </motion.section>

      {/* Quick Navigation */}
      <motion.section
        className='max-w-6xl mx-auto px-6 py-12'
        variants={staggerContainer}
        initial='hidden'
        animate='show'
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {sections.map((section, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveSection(idx)}
              variants={fadeIn}
              className={`p-4 rounded-xl transition duration-300 flex flex-col items-center gap-2 ${
                activeSection === idx
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.icon}
              <span className='text-sm font-semibold text-center'>{section.title.split(' ').pop()}</span>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className='max-w-4xl mx-auto px-6 pb-16'
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-indigo-600 mb-2'>
            {sections[activeSection].title}
          </h2>
          <div className='h-1 w-20 bg-indigo-500 rounded-full'></div>
        </div>

        <motion.div
          className='space-y-4'
          variants={staggerContainer}
          initial='hidden'
          animate='show'
        >
          {sections[activeSection].steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className='border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300'
            >
              <button
                onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                className='w-full p-6 bg-gray-50 hover:bg-gray-100 flex items-start justify-between transition duration-300'
              >
                <div className='text-left flex gap-4 items-start'>
                  <div className='mt-1 text-indigo-600 font-bold text-lg'>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-gray-800'>{step.title}</h3>
                    <p className='text-gray-600 text-sm mt-1'>{step.desc}</p>
                  </div>
                </div>
                <div className='text-indigo-600 text-xl ml-4'>
                  {expandedStep === idx ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedStep === idx ? 'auto' : 0,
                  opacity: expandedStep === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden'
              >
                <div className='p-6 bg-white border-t border-gray-200'>
                  <div className='flex gap-3 items-start'>
                    <FaCheckCircle className='text-green-500 mt-1 flex-shrink-0' />
                    <p className='text-gray-700 text-sm leading-relaxed whitespace-pre-wrap'>
                      {step.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pro Tips Section */}
      <motion.section
        className='bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-6 my-16'
        variants={staggerContainer}
        initial='hidden'
        animate='show'
      >
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            className='text-3xl font-bold text-center text-indigo-600 mb-12'
            variants={fadeIn}
          >
            💡 Pro Tips for Success
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {tips.map((tip, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex gap-4'
              >
                <div className='flex-shrink-0'>{tip.icon}</div>
                <div>
                  <h3 className='font-bold text-gray-800 mb-2'>{tip.title}</h3>
                  <p className='text-gray-600 text-sm'>{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Question Types Reference */}
      <motion.section
        className='max-w-6xl mx-auto px-6 pb-16'
        variants={staggerContainer}
        initial='hidden'
        animate='show'
      >
        <motion.h2 className='text-3xl font-bold text-indigo-600 mb-2' variants={fadeIn}>
          ❓ Question Types Guide
        </motion.h2>
        <div className='h-1 w-20 bg-indigo-500 rounded-full mb-8'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              name: '🎯 Quiz',
              desc: 'Traditional multiple-choice questions to test knowledge. Perfect for assessments and learning.',
              use: 'Training, exams, knowledge checks'
            },
            {
              name: '📈 Ranking',
              desc: 'Ask participants to rank items from top to bottom. Great for opinions and preferences.',
              use: 'Surveys, team exercises, priorities'
            },
            {
              name: '🗳️ Poll',
              desc: 'Quick yes/no or opinion questions. Simple and engaging for instant feedback.',
              use: 'Quick opinions, market research, engagement'
            },
            {
              name: '🥧 Pie Chart',
              desc: 'Visual representation of votes in a pie chart format. See distribution of choices.',
              use: 'Data visualization, preferences, statistics'
            },
            {
              name: '🍩 Donut Chart',
              desc: 'Similar to pie chart but with a ring format. Modern and visually appealing.',
              use: 'Modern surveys, engagement metrics, analytics'
            },
            {
              name: '🤖 AI Generated',
              desc: 'Let AI generate questions based on your prompt. Mix with any question type above.',
              use: 'Content creation, brainstorming, rapid deployment'
            }
          ].map((type, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className='p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 hover:shadow-md transition duration-300'
            >
              <h3 className='text-lg font-bold text-indigo-600 mb-2'>{type.name}</h3>
              <p className='text-gray-700 text-sm mb-3'>{type.desc}</p>
              <p className='text-xs text-gray-500 font-semibold'>
                <span className='text-indigo-600'>Use case:</span> {type.use}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className='bg-gradient-to-r from-indigo-600 to-indigo-800 py-16 px-6 text-white text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2 className='text-3xl md:text-4xl font-bold mb-4' variants={fadeIn} initial='hidden' animate='show'>
          Ready to Create Your First Quiz?
        </motion.h2>
        <motion.p className='text-lg text-indigo-100 mb-8 max-w-2xl mx-auto' variants={fadeIn} initial='hidden' animate='show'>
          Start with an AI-generated presentation or create from scratch. It takes less than 5 minutes!
        </motion.p>
        <motion.button
          className='bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition duration-300 shadow-lg'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now
        </motion.button>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className='max-w-4xl mx-auto px-6 py-16'
        variants={staggerContainer}
        initial='hidden'
        animate='show'
      >
        <motion.h2 className='text-3xl font-bold text-indigo-600 mb-2' variants={fadeIn}>
          ❓ Frequently Asked Questions
        </motion.h2>
        <div className='h-1 w-20 bg-indigo-500 rounded-full mb-8'></div>

        <div className='space-y-4'>
          {[
            {
              q: 'Can I edit questions after going live?',
              a: 'NO! You have make sure your old questions are correct before going live.'
            },
            {
              q: 'How many participants can join a single session?',
              a: 'There\'s no limit! Quizify is built to handle hundreds of participants simultaneously with real-time updates.'
            },
            {
              q: 'Can I reuse presentations?',
              a: 'Absolutely! Save presentations as templates or run the same presentation multiple times. Perfect for recurring training or classes.'
            },
            {
              q: 'How do I share my presentations with colleagues?',
              a: 'Use the "Share" feature to invite specific people or generate a shareable link. You can grant view-only or edit permissions.'
            },
            {
              q: 'What if I want to use the AI feature?',
              a: 'Simply write a prompt describing what you want, and our AI will generate a complete presentation with questions and answers. You can then customize it further.'
            },
            {
              q: 'Can I download session results?',
              a: 'Yes! After each session, download detailed analytics as PDF or CSV including participant responses, scores, and timing data.'
            }
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className='border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition duration-300'
            >
              <p className='font-bold text-gray-800 mb-2'>{faq.q}</p>
              <p className='text-gray-600 text-sm'>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.div
        className='bg-indigo-100 border-t-4 border-indigo-600 py-8 px-6 text-center mt-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className='text-gray-700 max-w-2xl mx-auto'>
          Still have questions? Check out our <span className='font-bold'>documentation</span> or reach out to our support team. 
          We're here to help you create amazing interactive experiences! 🚀
        </p>
      </motion.div>
    </div>
  )
}

export default HowToUse
