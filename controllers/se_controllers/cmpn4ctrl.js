const CMPN4m = require('../../models/se_models/cmpn4Model')
const StudU = require('../../models/studentModel')

const cmpn4ctrl = {
    studentall4 : async (req,res) =>{
        try{
            const stu= await CMPN4m.find()
            res.json(stu)
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    sem4show : async (req,res) =>{
        try {
            const Studuser = await StudU.findById(req.user.id).select('pid')
            const pid = Studuser.pid
            const sem4 = await CMPN4m.findOne({pid}).select('-_id -createdAt -updatedAt -__v')

            res.json(sem4)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    am4edit : async (req,res) =>{
        try{
            const {pid, am4_t, am4_u, am4_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(am4_t<0||am4_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(am4_u<0||am4_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(am4_i<0||am4_i>25)
                return res.status(400).json({msg: "Internal marks cannot be more than 25 or less than 0"})
            
            const stu= await CMPN4m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(am4_t){
                await CMPN4m.findOneAndUpdate({pid}, {
                    am4_t
                })
            }

            if(am4_u){
                await CMPN4m.findOneAndUpdate({pid}, {
                    am4_u
                })
            }

            if(am4_i){
                await CMPN4m.findOneAndUpdate({pid}, {
                    am4_i
                })
            }

            const resp = await CMPN4m.findOne({pid}) 
            const p_am4_t = am4_t?am4_t:resp.am4_t
            const p_am4_u = am4_u?am4_u:resp.am4_u
            const p_am4_i = am4_i?am4_i:resp.am4_i

            if(p_am4_t<32||p_am4_u<8||p_am4_i<10){
                const am4_p = 0.0
                await CMPN4m.findOneAndUpdate({pid}, {
                    am4_p
                })
            }else{
                const am4_p = ((Number(p_am4_t)+Number(p_am4_u)+Number(p_am4_i))/125)*100
                await CMPN4m.findOneAndUpdate({pid}, {
                    am4_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    am4all : async (req,res) =>{
        try{ 
            const students = await CMPN4m.find().select('pid am4_t am4_u am4_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    am4stats : async (req,res) =>{
        try{ 
            const statstud = await CMPN4m.find().select('pid am4_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    micropedit : async (req,res) =>{
        try{
            const {pid, microp_t, microp_u, microp_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(microp_t<0||microp_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(microp_u<0||microp_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(microp_i<0||microp_i>25)
                return res.status(400).json({msg: "Internal marks cannot be more than 25 or less than 0"})
            
            const stu= await CMPN4m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(microp_t){
                await CMPN4m.findOneAndUpdate({pid}, {
                    microp_t
                })
            }

            if(microp_u){
                await CMPN4m.findOneAndUpdate({pid}, {
                    microp_u
                })
            }

            if(microp_i){
                await CMPN4m.findOneAndUpdate({pid}, {
                    microp_i
                })
            }

            const resp = await CMPN4m.findOne({pid}) 
            const p_microp_t = microp_t?microp_t:resp.microp_t
            const p_microp_u = microp_u?microp_u:resp.microp_u
            const p_microp_i = microp_i?microp_i:resp.microp_i

            if(p_microp_t<32||p_microp_u<8||p_microp_i<10){
                const microp_p = 0.0
                await CMPN4m.findOneAndUpdate({pid}, {
                    microp_p
                })
            }else{
                const microp_p = ((Number(p_microp_t)+Number(p_microp_u)+Number(p_microp_i))/125)*100
                await CMPN4m.findOneAndUpdate({pid}, {
                    microp_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    micropall : async (req,res) =>{
        try{ 
            const students = await CMPN4m.find().select('pid microp_t microp_u microp_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    micropstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN4m.find().select('pid microp_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    osedit : async (req,res) =>{
        try{
            const {pid, os_t, os_u, os_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(os_t<0||os_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(os_u<0||os_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(os_i<0||os_i>50)
                return res.status(400).json({msg: "Internal marks cannot be more than 50 or less than 0"})
            
            const stu= await CMPN4m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(os_t){
                await CMPN4m.findOneAndUpdate({pid}, {
                    os_t
                })
            }

            if(os_u){
                await CMPN4m.findOneAndUpdate({pid}, {
                    os_u
                })
            }

            if(os_i){
                await CMPN4m.findOneAndUpdate({pid}, {
                    os_i
                })
            }

            const resp = await CMPN4m.findOne({pid}) 
            const p_os_t = os_t?os_t:resp.os_t
            const p_os_u = os_u?os_u:resp.os_u
            const p_os_i = os_i?os_i:resp.os_i

            if(p_os_t<32||p_os_u<8||p_os_i<20){
                const os_p = 0.0
                await CMPN4m.findOneAndUpdate({pid}, {
                    os_p
                })
            }else{
                const os_p = ((Number(p_os_t)+Number(p_os_u)+Number(p_os_i))/150)*100
                await CMPN4m.findOneAndUpdate({pid}, {
                    os_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    osall : async (req,res) =>{
        try{ 
            const students = await CMPN4m.find().select('pid os_t os_u os_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    osstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN4m.find().select('pid os_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    aoaedit : async (req,res) =>{
        try{
            const {pid, aoa_t, aoa_u, aoa_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(aoa_t<0||aoa_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(aoa_u<0||aoa_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(aoa_i<0||aoa_i>50)
                return res.status(400).json({msg: "Internal marks cannot be more than 50 or less than 0"})
            
            const stu= await CMPN4m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(aoa_t){
                await CMPN4m.findOneAndUpdate({pid}, {
                    aoa_t
                })
            }

            if(aoa_u){
                await CMPN4m.findOneAndUpdate({pid}, {
                    aoa_u
                })
            }

            if(aoa_i){
                await CMPN4m.findOneAndUpdate({pid}, {
                    aoa_i
                })
            }

            const resp = await CMPN4m.findOne({pid}) 
            const p_aoa_t = aoa_t?aoa_t:resp.aoa_t
            const p_aoa_u = aoa_u?aoa_u:resp.aoa_u
            const p_aoa_i = aoa_i?aoa_i:resp.aoa_i

            if(p_aoa_t<32||p_aoa_u<8||p_aoa_i<20){
                const aoa_p = 0.0
                await CMPN4m.findOneAndUpdate({pid}, {
                    aoa_p
                })
            }else{
                const aoa_p = ((Number(p_aoa_t)+Number(p_aoa_u)+Number(p_aoa_i))/150)*100
                await CMPN4m.findOneAndUpdate({pid}, {
                    aoa_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    aoaall : async (req,res) =>{
        try{ 
            const students = await CMPN4m.find().select('pid aoa_t aoa_u aoa_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    aoastats : async (req,res) =>{
        try{ 
            const statstud = await CMPN4m.find().select('pid aoa_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dbmsedit : async (req,res) =>{
        try{
            const {pid, dbms_t, dbms_u, dbms_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(dbms_t<0||dbms_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(dbms_u<0||dbms_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(dbms_i<0||dbms_i>50)
                return res.status(400).json({msg: "Internal marks cannot be more than 50 or less than 0"})
            
            const stu= await CMPN4m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(dbms_t){
                await CMPN4m.findOneAndUpdate({pid}, {
                    dbms_t
                })
            }

            if(dbms_u){
                await CMPN4m.findOneAndUpdate({pid}, {
                    dbms_u
                })
            }

            if(dbms_i){
                await CMPN4m.findOneAndUpdate({pid}, {
                    dbms_i
                })
            }

            const resp = await CMPN4m.findOne({pid}) 
            const p_dbms_t = dbms_t?dbms_t:resp.dbms_t
            const p_dbms_u = dbms_u?dbms_u:resp.dbms_u
            const p_dbms_i = dbms_i?dbms_i:resp.dbms_i

            if(p_dbms_t<32||p_dbms_u<8||p_dbms_i<20){
                const dbms_p = 0.0
                await CMPN4m.findOneAndUpdate({pid}, {
                    dbms_p
                })
            }else{
                const dbms_p = ((Number(p_dbms_t)+Number(p_dbms_u)+Number(p_dbms_i))/150)*100
                await CMPN4m.findOneAndUpdate({pid}, {
                    dbms_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    dbmsall : async (req,res) =>{
        try{ 
            const students = await CMPN4m.find().select('pid dbms_t dbms_u dbms_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dbmsstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN4m.find().select('pid dbms_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    minipro2edit : async (req,res) =>{
        try{
            const {pid, minipro2_t}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(minipro2_t<0||minipro2_t>50)
                return res.status(400).json({msg: "Term marks cannot be more than 50 or less than 0"})
            
            const stu= await CMPN4m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(minipro2_t){
                await CMPN4m.findOneAndUpdate({pid}, {
                    minipro2_t
                })
            }

            const resp = await CMPN4m.findOne({pid}) 
            const p_minipro2_t = minipro2_t?minipro2_t:resp.minipro2_t

            if(p_minipro2_t<20){
                const minipro2_p = 0.0
                await CMPN4m.findOneAndUpdate({pid}, {
                    minipro2_p
                })
            }else{
                const minipro2_p = ((Number(p_minipro2_t))/50)*100
                await CMPN4m.findOneAndUpdate({pid}, {
                    minipro2_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    minipro2all : async (req,res) =>{
        try{ 
            const students = await CMPN4m.find().select('pid minipro2_t')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    minipro2stats : async (req,res) =>{
        try{ 
            const statstud = await CMPN4m.find().select('pid minipro2_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    ppedit : async (req,res) =>{
        try{
            const {pid, pp_t}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(pp_t<0||pp_t>25)
                return res.status(400).json({msg: "Term marks cannot be more than 25 or less than 0"})
            
            const stu= await CMPN4m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(pp_t){
                await CMPN4m.findOneAndUpdate({pid}, {
                    pp_t
                })
            }

            const resp = await CMPN4m.findOne({pid}) 
            const p_pp_t = pp_t?pp_t:resp.pp_t

            if(p_pp_t<10){
                const pp_p = 0.0
                await CMPN4m.findOneAndUpdate({pid}, {
                    pp_p
                })
            }else{
                const pp_p = ((Number(p_pp_t))/25)*100
                await CMPN4m.findOneAndUpdate({pid}, {
                    pp_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    ppall : async (req,res) =>{
        try{ 
            const students = await CMPN4m.find().select('pid pp_t')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    ppstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN4m.find().select('pid pp_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports = cmpn4ctrl