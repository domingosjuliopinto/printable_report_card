import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

import Loginchoice from './Loginchoice'

import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'
import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'

import StLogin from './auth/studentauth/StLogin'
import StRegister from './auth/studentauth/StRegister'
import StActivationEmail from './auth/studentauth/StActivationEmail'
import StForgotPass from '../body/auth/studentauth/StForgotPassword'
import StResetPass from '../body/auth/studentauth/StResetPassword'
import KnowPID from './auth/studentauth/KnowPID'

import Profile from '../body/profile/Profile'
import Home from '../body/home/Home'
import Default from '../body/home/Default'
import TSubjects from '../body/teacher/TSubjects'
import TSubjstats from '../body/teacher/TSubjstats'
import TSubjgraphs from '../body/teacher/TSubjgraphs'
import SSemesters from '../body/student/SSemesters'
import SGraphs from '../body/student/SGraphs'

//Student Report Card routes
import Sem3RC from '../body/student/reportcard/sem3rc/Sem3RC'
import Sem4RC from '../body/student/reportcard/sem4rc/Sem4RC'
import Sem3Graph from '../body/student/graphicstatus/sem3gs/Sem3Graph'
import Sem4Graph from '../body/student/graphicstatus/sem4gs/Sem4Graph'

//Sem 3 Subject routes
import Am3Choice from '../body/teacher/sem3subj/sem3Maths/Am3Choice'
import Am3SeCmpnB from './teacher/sem3subj/sem3Maths/Am3SeCmpnB'
import Am3SChoice from '../body/teacher/sem3subj/sem3Maths/Am3SChoice'
import Am3SSeCmpnB from './teacher/sem3subj/sem3Maths/am3stats/Am3SSeCmpnB'
import Am3Graph from './teacher/sem3subj/sem3Maths/am3graphs/Am3Graph'

import DsgtChoice from '../body/teacher/sem3subj/sem3Maths/DsgtChoice'
import DsgtSeCmpnB from './teacher/sem3subj/sem3Maths/DsgtSeCmpnB'
import DsgtSChoice from '../body/teacher/sem3subj/sem3Maths/DsgtSChoice'
import DsgtSSeCmpnB from './teacher/sem3subj/sem3Maths/dsgtstats/DsgtSSeCmpnB'
import DsgtGraph from './teacher/sem3subj/sem3Maths/dsgtgraphs/DsgtGraph'

import CgChoice from '../body/teacher/sem3subj/sem3Software/CgChoice'
import CgSeCmpnB from './teacher/sem3subj/sem3Software/CgSeCmpnB'
import CgSChoice from '../body/teacher/sem3subj/sem3Software/CgSChoice'
import CgSSeCmpnB from './teacher/sem3subj/sem3Software/cgstats/CgSSeCmpnB'
import CgGraph from './teacher/sem3subj/sem3Software/cggraphs/CgGraph'

import DsChoice from '../body/teacher/sem3subj/sem3Software/DsChoice'
import DsSeCmpnB from './teacher/sem3subj/sem3Software/DsSeCmpnB'
import DsSChoice from '../body/teacher/sem3subj/sem3Software/DsSChoice'
import DsSSeCmpnB from './teacher/sem3subj/sem3Software/dsstats/DsSSeCmpnB'
import DsGraph from './teacher/sem3subj/sem3Software/dsgraphs/DsGraph'

import OopChoice from '../body/teacher/sem3subj/sem3Software/OopChoice'
import OopSeCmpnB from './teacher/sem3subj/sem3Software/OopSeCmpnB'
import OopSChoice from '../body/teacher/sem3subj/sem3Software/OopSChoice'
import OopSSeCmpnB from './teacher/sem3subj/sem3Software/oopstats/OopSSeCmpnB'
import OopGraph from './teacher/sem3subj/sem3Software/oopgraphs/OopGraph'

import DlcoaChoice from '../body/teacher/sem3subj/sem3Hardware/DlcoaChoice'
import DlcoaSeCmpnB from './teacher/sem3subj/sem3Hardware/DlcoaSeCmpnB'
import DlcoaSChoice from '../body/teacher/sem3subj/sem3Hardware/DlcoaSChoice'
import DlcoaSSeCmpnB from './teacher/sem3subj/sem3Hardware/dlcoastats/DlcoaSSeCmpnB'
import DlcoaGraph from './teacher/sem3subj/sem3Hardware/dlcoagraphs/DlcoaGraph'

import MiniPro1Choice from '../body/teacher/sem3subj/sem3Projects/Minipro1Choice'
import MiniPro1SeCmpnB from './teacher/sem3subj/sem3Projects/Minipro1SeCmpnB'
import MiniPro1SChoice from '../body/teacher/sem3subj/sem3Projects/Minipro1SChoice'
import MiniPro1SSeCmpnB from './teacher/sem3subj/sem3Projects/minipro1stats/Minipro1SSeCmpnB'
import MiniPro1Graph from './teacher/sem3subj/sem3Projects/minipro1graphs/Minipro1Graph'

//Sem 4 Subject Routes
import Am4Choice from '../body/teacher/sem4subj/sem4Maths/Am4Choice' 
import Am4SeCmpnB from '../body/teacher/sem4subj/sem4Maths/Am4SeCmpnB' 
import Am4SChoice from '../body/teacher/sem4subj/sem4Maths/Am4SChoice'
import Am4SSeCmpnB from './teacher/sem4subj/sem4Maths/am4stats/Am4SSeCmpnB'
import Am4Graph from './teacher/sem4subj/sem4Maths/am4graphs/Am4Graph'

import DbmsChoice from '../body/teacher/sem4subj/sem4Software/DbmsChoice'
import DbmsSeCmpnB from './teacher/sem4subj/sem4Software/DbmsSeCmpnB'
import DbmsSChoice from '../body/teacher/sem4subj/sem4Software/DbmsSChoice'
import DbmsSSeCmpnB from './teacher/sem4subj/sem4Software/dbmsstats/DbmsSSeCmpnB'
import DbmsGraph from './teacher/sem4subj/sem4Software/dbmsgraphs/DbmsGraph'

import OsChoice from '../body/teacher/sem4subj/sem4Hardware/OsChoice'
import OsSeCmpnB from './teacher/sem4subj/sem4Hardware/OsSeCmpnB'
import OsSChoice from '../body/teacher/sem4subj/sem4Hardware/OsSChoice'
import OsSSeCmpnB from './teacher/sem4subj/sem4Hardware/osstats/OsSSecmpnB'
import OsGraph from './teacher/sem4subj/sem4Hardware/osgraphs/OsGraph'

import AoaChoice from '../body/teacher/sem4subj/sem4Software/AoaChoice'
import AoaSeCmpnB from './teacher/sem4subj/sem4Software/AoaSeCmpnB'
import AoaSChoice from '../body/teacher/sem4subj/sem4Software/AoaSChoice'
import AoaSSeCmpnB from './teacher/sem4subj/sem4Software/aoastats/AoaSSeCmpnB'
import AoaGraph from './teacher/sem4subj/sem4Software/aoagraphs/AoaGraph'

import MicropChoice from '../body/teacher/sem4subj/sem4Hardware/MicropChoice'
import MicropSeCmpnB from './teacher/sem4subj/sem4Hardware/MicropSeCmpnB'
import MicropSChoice from '../body/teacher/sem4subj/sem4Hardware/MicropSChoice'
import MicropSSeCmpnB from './teacher/sem4subj/sem4Hardware/micropstats/MicropSSeCmpnB'
import MicropGraph from './teacher/sem4subj/sem4Hardware/micropgraphs/MicropGraph'

import PpChoice from '../body/teacher/sem4subj/sem4Software/PpChoice'
import PpSeCmpnB from './teacher/sem4subj/sem4Software/PpSeCmpnB'
import PpSChoice from '../body/teacher/sem4subj/sem4Software/PpSChoice'
import PpSSeCmpnB from './teacher/sem4subj/sem4Software/ppstats/PpSSeCmpnB'
import PpGraph from './teacher/sem4subj/sem4Software/ppgraphs/PpGraph'

import MiniPro2Choice from '../body/teacher/sem4subj/sem4Projects/Minipro2Choice'
import MiniPro2SeCmpnB from './teacher/sem4subj/sem4Projects/Minipro2SeCmpnB'
import MiniPro2SChoice from '../body/teacher/sem4subj/sem4Projects/Minipro2SChoice'
import MiniPro2SSeCmpnB from './teacher/sem4subj/sem4Projects/minipro2stats/Minipro2SSeCmpnB'
import MiniPro2Graph from './teacher/sem4subj/sem4Projects/minipro2graphs/Minipro2Graph'


function Body(){

    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    const StudentLogin=localStorage.getItem('StudentLogin')

    return(
        <section>
            <Routes>
                <Route path="/loginchoice" element={isLogged ? <NotFound/> : <Loginchoice/>} exact />

                <Route path="/login" element={isLogged ? <NotFound/> : <Login/>} exact />
                <Route path="/register" element={isLogged ? <NotFound/> : <Register/>} exact />
                <Route path="/forgot_password" element={isLogged ? <NotFound/> : <ForgotPass/>} exact />

                <Route path="/user/reset/:token" element={isLogged ? <NotFound/> : <ResetPass/>} exact />
                <Route path="/user/activate/:activation_token" element={<ActivationEmail/>} exact />

                <Route path="/stlogin" element={isLogged ? <NotFound/> : <StLogin/>} exact />
                <Route path="/stregister" element={isLogged ? <NotFound/> : <StRegister/>} exact />
                <Route path="/stforgot_password" element={isLogged ? <NotFound/> : <StForgotPass/>} exact />

                <Route path="/stuser/pid/:ktoken" element={isLogged ? <NotFound/> : <KnowPID/>} exact />
                <Route path="/stuser/reset/:token" element={isLogged ? <NotFound/> : <StResetPass/>} exact />
                <Route path="/stuser/activate/:activation_token" element={<StActivationEmail/>} exact />

                <Route path="/" element={isLogged ? <Home/> : <Default/>} exact />
                <Route path="/profile" element={isLogged ? <Profile/> :<NotFound/>} exact />
                <Route path="/entermarks" element={isLogged && !StudentLogin ? <TSubjects/> : <NotFound/>} exact />
                <Route path="/viewstats" element={isLogged && !StudentLogin ? <TSubjstats/> : <NotFound/>} exact />
                <Route path="/viewgraphs" element={isLogged && !StudentLogin ? <TSubjgraphs/> : <NotFound/>} exact />
                <Route path="/viewreport" element={isLogged && StudentLogin ? <SSemesters/> : <NotFound/>} exact />
                <Route path="/viewstgraphs" element={isLogged && StudentLogin ? <SGraphs/> : <NotFound/>} exact />

                <Route path="/sem3report" element={isLogged && StudentLogin ? <Sem3RC/> : <NotFound/>} exact />
                <Route path="/sem3graphs" element={isLogged && StudentLogin ? <Sem3Graph/> : <NotFound/>} exact />
                <Route path="/sem4report" element={isLogged && StudentLogin ? <Sem4RC/> : <NotFound/>} exact />
                <Route path="/sem4graphs" element={isLogged && StudentLogin ? <Sem4Graph/> : <NotFound/>} exact />
               
                <Route path="/am3choice" element={isLogged && !StudentLogin ? <Am3Choice/> : <NotFound/>} exact />
                <Route path="/am3secmpnb" element={isLogged && !StudentLogin ? <Am3SeCmpnB/> : <NotFound/>} exact />
                <Route path="/am3stats" element={isLogged && !StudentLogin ? <Am3SChoice/> : <NotFound/>} exact />
                <Route path="/am3secmpnbstat" element={isLogged && !StudentLogin ? <Am3SSeCmpnB/> : <NotFound/>} exact />
                <Route path="/am3graphs" element={isLogged && !StudentLogin ? <Am3Graph/> : <NotFound/>} exact />

                <Route path="/dsgtchoice" element={isLogged && !StudentLogin ? <DsgtChoice/> : <NotFound/>} exact />
                <Route path="/dsgtsecmpnb" element={isLogged && !StudentLogin ? <DsgtSeCmpnB/> : <NotFound/>} exact />
                <Route path="/dsgtstats" element={isLogged && !StudentLogin ? <DsgtSChoice/> : <NotFound/>} exact />
                <Route path="/dsgtsecmpnbstat" element={isLogged && !StudentLogin ? <DsgtSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/dsgtgraphs" element={isLogged && !StudentLogin ? <DsgtGraph/> : <NotFound/>} exact />

                <Route path="/cgchoice" element={isLogged && !StudentLogin ? <CgChoice/> : <NotFound/>} exact />
                <Route path="/cgsecmpnb" element={isLogged && !StudentLogin ? <CgSeCmpnB/> : <NotFound/>} exact />
                <Route path="/cgstats" element={isLogged && !StudentLogin ? <CgSChoice/> : <NotFound/>} exact />
                <Route path="/cgsecmpnbstat" element={isLogged && !StudentLogin ? <CgSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/cggraphs" element={isLogged && !StudentLogin ? <CgGraph/> : <NotFound/>} exact />

                <Route path="/dschoice" element={isLogged && !StudentLogin ? <DsChoice/> : <NotFound/>} exact />
                <Route path="/dssecmpnb" element={isLogged && !StudentLogin ? <DsSeCmpnB/> : <NotFound/>} exact />
                <Route path="/dsstats" element={isLogged && !StudentLogin ? <DsSChoice/> : <NotFound/>} exact />
                <Route path="/dssecmpnbstat" element={isLogged && !StudentLogin ? <DsSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/dsgraphs" element={isLogged && !StudentLogin ? <DsGraph/> : <NotFound/>} exact />

                <Route path="/oopchoice" element={isLogged && !StudentLogin ? <OopChoice/> : <NotFound/>} exact />
                <Route path="/oopsecmpnb" element={isLogged && !StudentLogin ? <OopSeCmpnB/> : <NotFound/>} exact />
                <Route path="/oopstats" element={isLogged && !StudentLogin ? <OopSChoice/> : <NotFound/>} exact />
                <Route path="/oopsecmpnbstat" element={isLogged && !StudentLogin ? <OopSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/oopgraphs" element={isLogged && !StudentLogin ? <OopGraph/> : <NotFound/>} exact />

                <Route path="/dlcoachoice" element={isLogged && !StudentLogin ? <DlcoaChoice/> : <NotFound/>} exact />
                <Route path="/dlcoasecmpnb" element={isLogged && !StudentLogin ? <DlcoaSeCmpnB/> : <NotFound/>} exact />
                <Route path="/dlcoastats" element={isLogged && !StudentLogin ? <DlcoaSChoice/> : <NotFound/>} exact />
                <Route path="/dlcoasecmpnbstat" element={isLogged && !StudentLogin ? <DlcoaSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/dlcoagraphs" element={isLogged && !StudentLogin ? <DlcoaGraph/> : <NotFound/>} exact />

                <Route path="/minipro1choice" element={isLogged && !StudentLogin ? <MiniPro1Choice/> : <NotFound/>} exact />
                <Route path="/minipro1secmpnb" element={isLogged && !StudentLogin ? <MiniPro1SeCmpnB/> : <NotFound/>} exact />
                <Route path="/minipro1stats" element={isLogged && !StudentLogin ? <MiniPro1SChoice/> : <NotFound/>} exact />
                <Route path="/minipro1secmpnbstat" element={isLogged && !StudentLogin ? <MiniPro1SSeCmpnB/> : <NotFound/>} exact />
                <Route path="/minipro1graphs" element={isLogged && !StudentLogin ? <MiniPro1Graph/> : <NotFound/>} exact />

                <Route path="/am4choice" element={isLogged && !StudentLogin ? <Am4Choice/> : <NotFound/>} exact />
                <Route path="/am4secmpnb" element={isLogged && !StudentLogin ? <Am4SeCmpnB/> : <NotFound/>} exact />
                <Route path="/am4stats" element={isLogged && !StudentLogin ? <Am4SChoice/> : <NotFound/>} exact />
                <Route path="/am4secmpnbstat" element={isLogged && !StudentLogin ? <Am4SSeCmpnB/> : <NotFound/>} exact />
                <Route path="/am4graphs" element={isLogged && !StudentLogin ? <Am4Graph/> : <NotFound/>} exact />
                
                <Route path="/dbmschoice" element={isLogged && !StudentLogin ? <DbmsChoice/> : <NotFound/>} exact />
                <Route path="/dbmssecmpnb" element={isLogged && !StudentLogin ? <DbmsSeCmpnB/>: <NotFound/>} exact />
                <Route path="/dbmsstats" element={isLogged && !StudentLogin ? <DbmsSChoice/> : <NotFound/>} exact />
                <Route path="/dbmssecmpnbstat" element={isLogged && !StudentLogin ? <DbmsSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/dbmsgraphs" element={isLogged && !StudentLogin ? <DbmsGraph/> : <NotFound/>} exact />

                <Route path="/oschoice" element={isLogged && !StudentLogin ? <OsChoice/> : <NotFound/>} exact />
                <Route path="/ossecmpnb" element={isLogged && !StudentLogin ? <OsSeCmpnB/> : <NotFound/>} exact />
                <Route path="/osstats" element={isLogged && !StudentLogin ? <OsSChoice/> : <NotFound/>} exact />
                <Route path="/ossecmpnbstat" element={isLogged && !StudentLogin ? <OsSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/osgraphs" element={isLogged && !StudentLogin ? <OsGraph/> : <NotFound/>} exact />

                <Route path="/aoachoice" element={isLogged && !StudentLogin ? <AoaChoice/> : <NotFound/>} exact />
                <Route path="/aoasecmpnb" element={isLogged && !StudentLogin ? <AoaSeCmpnB/> : <NotFound/>} exact />
                <Route path="/aoastats" element={isLogged && !StudentLogin ? <AoaSChoice/> : <NotFound/>} exact />
                <Route path="/aoasecmpnbstat" element={isLogged && !StudentLogin ? <AoaSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/aoagraphs" element={isLogged && !StudentLogin ? <AoaGraph/> : <NotFound/>} exact />

                <Route path="/micropchoice" element={isLogged && !StudentLogin ? <MicropChoice/> : <NotFound/>} exact />
                <Route path="/micropsecmpnb" element={isLogged && !StudentLogin ? <MicropSeCmpnB/> : <NotFound/>} exact />
                <Route path="/micropstats" element={isLogged && !StudentLogin ? <MicropSChoice/> : <NotFound/>} exact />
                <Route path="/micropsecmpnbstat" element={isLogged && !StudentLogin ? <MicropSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/micropgraphs" element={isLogged && !StudentLogin ? <MicropGraph/> : <NotFound/>} exact />
                
                <Route path="/ppchoice" element={isLogged && !StudentLogin ? <PpChoice/> : <NotFound/>} exact />
                <Route path="/ppsecmpnb" element={isLogged && !StudentLogin ? <PpSeCmpnB/> : <NotFound/>} exact />
                <Route path="/ppstats" element={isLogged && !StudentLogin ? <PpSChoice/> : <NotFound/>} exact />
                <Route path="/ppsecmpnbstat" element={isLogged && !StudentLogin ? <PpSSeCmpnB/> : <NotFound/>} exact />
                <Route path="/ppgraphs" element={isLogged && !StudentLogin ? <PpGraph/> : <NotFound/>} exact />

                <Route path="/minipro2choice" element={isLogged && !StudentLogin ? <MiniPro2Choice/> : <NotFound/>} exact />
                <Route path="/minipro2secmpnb" element={isLogged && !StudentLogin ? <MiniPro2SeCmpnB/> : <NotFound/>} exact />
                <Route path="/minipro2stats" element={isLogged && !StudentLogin ? <MiniPro2SChoice/> : <NotFound/>} exact />
                <Route path="/minipro2secmpnbstat" element={isLogged && !StudentLogin ? <MiniPro2SSeCmpnB/> : <NotFound/>} exact />
                <Route path="/minipro2graphs" element={isLogged && !StudentLogin ? <MiniPro2Graph/> : <NotFound/>} exact />
            </Routes>
        </section>
    )
}

export default Body