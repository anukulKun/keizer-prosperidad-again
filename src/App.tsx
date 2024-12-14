import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import NotFound from './Components/NotFound/NotFound'
import Hero from "./Pages/Hero/Hero"
import AboutUs from './Pages/AboutUs/AboutUs'
import Notes from './Pages/Notes/Notes'
import Counselling from './Pages/Counselling/Counselling'
import Subjects from './Pages/Subjects/Subjects'
import ContactUs from './Pages/ContactUs/ContactUs'
import WhatsApp from './Components/WhatsApp/WhatsApp'
import Gallery from './Pages/Gallery/Gallery'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>
      <div className='font-poppins relative overflow-x-hidden'>
        <BrowserRouter>
          <Navbar/>
          <WhatsApp/>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/notes/*'>
              <Route index element={<Navigate to="shortnotes" replace />} />
              <Route path='shortnotes' element={<Notes title='Short' description='For students who know the syllabus but need a clearer understanding of key concepts, our short notes offer concise explanations with examples to help resolve any lingering doubts.'/>}/>
              <Route path='quicknotes' element={<Notes title='Quick' description='When exams are just around the corner and time is short, our quick notes are here to save the day. These brief, easy-to-understand notes cover essential points to help you review efficiently for the exams.'/>}/>
              <Route path='longnotes' element={<Notes title='Long' description='Comprehensive and in-depth explanations covering your entire syllabus, designed to fill any gaps that may arise if a topic was missed or difficult to understand. Our long notes include detailed examples to ensure clarity and understanding.'/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='/counselling/*'>
              <Route index element={<Navigate to="peerpressure" replace />} />
              <Route path='peerpressure' element={<Counselling title='Peer Pressure' description='Peer pressure counseling assists individuals, especially adolescents, in recognizing and resisting negative influences from peers. It focuses on building self-confidence, assertiveness, and the ability to make independent choices.'/>}/>
              <Route path='jobandstressmanagement' element={<Counselling title='Job and Stress Management' description='This area provides strategies for managing workplace stress, job-related pressures, and achieving work-life balance. It offers tools for improving productivity, time management, and emotional well-being in a professional setting.'/>}/>
              <Route path='depression' element={<Counselling title='Depression' description='Depression counseling supports individuals in understanding and managing symptoms of depression, such as low mood, loss of interest, and fatigue. It provides coping techniques and therapeutic guidance for improved mental health and life quality.'/>}/>
              <Route path='confusionanddecisionmaking' element={<Counselling title='Confusion and Decision-Making' description='This area helps individuals experiencing confusion or difficulty in making important life decisions. It offers a structured approach to exploring options, identifying personal values, and making choices that align with one’s goals and well-being.'/>}/>
              <Route path='loverelationshipandissues' element={<Counselling title='Love, Relationship, and Issues' description='This area focuses on challenges within romantic relationships, helping individuals and couples navigate communication issues, trust, intimacy, and compatibility. It offers support in building healthy, lasting connections and resolving conflicts.'/>}/>
              <Route path='educational' element={<Counselling title='Educational' description='Educational counseling helps students with academic planning, study strategies, and career pathways. It addresses learning challenges, guides students in selecting suitable courses, and supports their academic growth.'/>}/>
              <Route path='career' element={<Counselling title='Career' description='Career counseling assists individuals in exploring suitable career paths based on their interests, skills, and market trends. It provides guidance on career shifts, skill development, and job search strategies, helping people find fulfilling career options.'/>}/>
              <Route path='mentalhealth' element={<Counselling title='Mental Health' description='Focused on mental well-being, this area provides support for anxiety, depression, stress, and other mental health concerns. It helps individuals develop coping strategies, enhance emotional regulation, and achieve a balanced life.'/>}/>
              <Route path='familyandrelationship' element={<Counselling title='Family and Relationship' description='This area supports individuals, couples, and families in navigating interpersonal conflicts, communication challenges, and relationship-building. It fosters healthy relationships and emotional understanding within families and between partners.'/>}/>
              <Route path='adolescent' element={<Counselling title='Adolescent' description='Specialized in the unique challenges faced by teenagers, adolescent counseling addresses issues such as peer pressure, self-esteem, identity, academic stress, and social relationships. It provides a safe space for teens to express and manage their emotions.'/>}/>
              <Route path='substanceabuse' element={<Counselling title='Substance Abuse' description='Substance abuse counseling provides support to individuals struggling with addiction and substance misuse. It includes relapse prevention, coping strategies, and a path to recovery through personalized interventions.'/>}/>
              <Route path='grief' element={<Counselling title='Grief' description='Grief counseling helps individuals cope with loss, whether it’s the death of a loved one, a breakup, or a major life change. It offers support through the grieving process and helps individuals find acceptance and peace.'/>}/>
              <Route path='wellness' element={<Counselling title='Wellness' description='Wellness counseling focuses on holistic health, including physical, emotional, and mental wellness. It emphasizes lifestyle changes, stress management, and overall personal development for a balanced life.'/>}/>
              <Route path='trauma' element={<Counselling title='Trauma' description='Trauma counseling supports individuals recovering from traumatic experiences, such as abuse, accidents, or sudden loss. It helps clients process traumatic events and rebuild resilience, fostering healing and empowerment.'/>}/>
              <Route path='other' element={<Counselling title='Other' description=''/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='/subjects/*'>
              <Route index element={<Navigate to="arts" replace />} />
              <Route path='arts' element={<Subjects/>}/>
              <Route path='science' element={<Subjects/>}/>
              <Route path='maths' element={<Subjects/>}/>
              <Route path='management' element={<Subjects/>}/>
              <Route path='cse' element={<Subjects/>}/>
              <Route path='hotelmanagement' element={<Subjects/>}/>
              <Route path='visualarts' element={<Subjects/>}/>
              <Route path='law' element={<Subjects/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
