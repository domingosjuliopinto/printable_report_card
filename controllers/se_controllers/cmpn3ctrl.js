const CMPN3m = require('../../models/se_models/cmpn3Model')
const StudU = require('../../models/studentModel')

const cmpn3ctrl={
    am3edit : async (req,res) =>{
        try{
            const {pid, am3_t, am3_u, am3_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(am3_t<0||am3_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(am3_u<0||am3_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(am3_i<0||am3_i>25)
                return res.status(400).json({msg: "Internal marks cannot be more than 25 or less than 0"})
            
            const stu= await CMPN3m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(am3_t){
                await CMPN3m.findOneAndUpdate({pid}, {
                    am3_t
                })
            }

            if(am3_u){
                await CMPN3m.findOneAndUpdate({pid}, {
                    am3_u
                })
            }

            if(am3_i){
                await CMPN3m.findOneAndUpdate({pid}, {
                    am3_i
                })
            }

            const resp = await CMPN3m.findOne({pid}) 
            const p_am3_t = am3_t?am3_t:resp.am3_t
            const p_am3_u = am3_u?am3_u:resp.am3_u
            const p_am3_i = am3_i?am3_i:resp.am3_i

            if(p_am3_t<32||p_am3_u<8||p_am3_i<10){
                const am3_p = 0.0
                await CMPN3m.findOneAndUpdate({pid}, {
                    am3_p
                })
            }else{
                const am3_p = ((Number(p_am3_t)+Number(p_am3_u)+Number(p_am3_i))/125)*100
                await CMPN3m.findOneAndUpdate({pid}, {
                    am3_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    am3all : async (req,res) =>{
        try{ 
            const students = await CMPN3m.find().select('pid am3_t am3_u am3_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    am3stats : async (req,res) =>{
        try{ 
            const statstud = await CMPN3m.find().select('pid am3_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    studentall3 : async (req,res) =>{
        try{
            const stu= await CMPN3m.find().select('-_id -createdAt -updatedAt -__v')
            res.json(stu)
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    cgedit : async (req,res) =>{
        try{
            const {pid, cg_t, cg_u, cg_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(cg_t<0||cg_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(cg_u<0||cg_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(cg_i<0||cg_i>50)
                return res.status(400).json({msg: "Internal marks cannot be more than 50 or less than 0"})
            
            const stu= await CMPN3m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(cg_t){
                await CMPN3m.findOneAndUpdate({pid}, {
                    cg_t
                })
            }

            if(cg_u){
                await CMPN3m.findOneAndUpdate({pid}, {
                    cg_u
                })
            }

            if(cg_i){
                await CMPN3m.findOneAndUpdate({pid}, {
                    cg_i
                })
            }

            const resp = await CMPN3m.findOne({pid}) 
            const p_cg_t = cg_t?cg_t:resp.cg_t
            const p_cg_u = cg_u?cg_u:resp.cg_u
            const p_cg_i = cg_i?cg_i:resp.cg_i

            if(p_cg_t<32||p_cg_u<8||p_cg_i<20){
                const cg_p = 0.0
                await CMPN3m.findOneAndUpdate({pid}, {
                    cg_p
                })
            }else{
                const cg_p = ((Number(p_cg_t)+Number(p_cg_u)+Number(p_cg_i))/150)*100
                await CMPN3m.findOneAndUpdate({pid}, {
                    cg_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    cgall : async (req,res) =>{
        try{ 
            const students = await CMPN3m.find().select('pid cg_t cg_u cg_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    cgstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN3m.find().select('pid cg_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dlcoaedit : async (req,res) =>{
        try{
            const {pid, dlcoa_t, dlcoa_u, dlcoa_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(dlcoa_t<0||dlcoa_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(dlcoa_u<0||dlcoa_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(dlcoa_i<0||dlcoa_i>25)
                return res.status(400).json({msg: "Internal marks cannot be more than 25 or less than 0"})
            
            const stu= await CMPN3m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(dlcoa_t){
                await CMPN3m.findOneAndUpdate({pid}, {
                    dlcoa_t
                })
            }

            if(dlcoa_u){
                await CMPN3m.findOneAndUpdate({pid}, {
                    dlcoa_u
                })
            }

            if(dlcoa_i){
                await CMPN3m.findOneAndUpdate({pid}, {
                    dlcoa_i
                })
            }

            const resp = await CMPN3m.findOne({pid}) 
            const p_dlcoa_t = dlcoa_t?dlcoa_t:resp.dlcoa_t
            const p_dlcoa_u = dlcoa_u?dlcoa_u:resp.dlcoa_u
            const p_dlcoa_i = dlcoa_i?dlcoa_i:resp.dlcoa_i

            if(p_dlcoa_t<32||p_dlcoa_u<8||p_dlcoa_i<10){
                const dlcoa_p = 0.0
                await CMPN3m.findOneAndUpdate({pid}, {
                    dlcoa_p
                })
            }else{
                const dlcoa_p = ((Number(p_dlcoa_t)+Number(p_dlcoa_u)+Number(p_dlcoa_i))/125)*100
                await CMPN3m.findOneAndUpdate({pid}, {
                    dlcoa_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    dlcoaall : async (req,res) =>{
        try{ 
            const students = await CMPN3m.find().select('pid dlcoa_t dlcoa_u dlcoa_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dlcoastats : async (req,res) =>{
        try{ 
            const statstud = await CMPN3m.find().select('pid dlcoa_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dsedit : async (req,res) =>{
        try{
            const {pid, ds_t, ds_u, ds_i}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(ds_t<0||ds_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(ds_u<0||ds_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            if(ds_i<0||ds_i>50)
                return res.status(400).json({msg: "Internal marks cannot be more than 50 or less than 0"})
            
            const stu= await CMPN3m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(ds_t){
                await CMPN3m.findOneAndUpdate({pid}, {
                    ds_t
                })
            }

            if(ds_u){
                await CMPN3m.findOneAndUpdate({pid}, {
                    ds_u
                })
            }

            if(ds_i){
                await CMPN3m.findOneAndUpdate({pid}, {
                    ds_i
                })
            }

            const resp = await CMPN3m.findOne({pid}) 
            const p_ds_t = ds_t?ds_t:resp.ds_t
            const p_ds_u = ds_u?ds_u:resp.ds_u
            const p_ds_i = ds_i?ds_i:resp.ds_i

            if(p_ds_t<32||p_ds_u<8||p_ds_i<20){
                const ds_p = 0.0
                await CMPN3m.findOneAndUpdate({pid}, {
                    ds_p
                })
            }else{
                const ds_p = ((Number(p_ds_t)+Number(p_ds_u)+Number(p_ds_i))/150)*100
                await CMPN3m.findOneAndUpdate({pid}, {
                    ds_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    dsall : async (req,res) =>{
        try{ 
            const students = await CMPN3m.find().select('pid ds_t ds_u ds_i')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dsstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN3m.find().select('pid ds_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dsgtedit : async (req,res) =>{
        try{
            const {pid, dsgt_t, dsgt_u}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(dsgt_t<0||dsgt_t>80)
                return res.status(400).json({msg: "Term marks cannot be more than 80 or less than 0"})
            
            if(dsgt_u<0||dsgt_u>20)
                return res.status(400).json({msg: "Unit marks cannot be more than 20 or less than 0"})
            
            const stu= await CMPN3m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(dsgt_t){
                await CMPN3m.findOneAndUpdate({pid}, {
                    dsgt_t
                })
            }

            if(dsgt_u){
                await CMPN3m.findOneAndUpdate({pid}, {
                    dsgt_u
                })
            }

            const resp = await CMPN3m.findOne({pid}) 
            const p_dsgt_t = dsgt_t?dsgt_t:resp.dsgt_t
            const p_dsgt_u = dsgt_u?dsgt_u:resp.dsgt_u

            if(p_dsgt_t<32||p_dsgt_u<8){
                const dsgt_p = 0.0
                await CMPN3m.findOneAndUpdate({pid}, {
                    dsgt_p
                })
            }else{
                const dsgt_p = ((Number(p_dsgt_t)+Number(p_dsgt_u))/100)*100
                await CMPN3m.findOneAndUpdate({pid}, {
                    dsgt_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    dsgtall : async (req,res) =>{
        try{ 
            const students = await CMPN3m.find().select('pid dsgt_t dsgt_u')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    dsgtstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN3m.find().select('pid dsgt_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    minipro1edit : async (req,res) =>{
        try{
            const {pid, minipro1_t}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(minipro1_t<0||minipro1_t>50)
                return res.status(400).json({msg: "Term marks cannot be more than 50 or less than 0"})
            
            const stu= await CMPN3m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(minipro1_t){
                await CMPN3m.findOneAndUpdate({pid}, {
                    minipro1_t
                })
            }

            const resp = await CMPN3m.findOne({pid}) 
            const p_minipro1_t = minipro1_t?minipro1_t:resp.minipro1_t

            if(p_minipro1_t<20){
                const minipro1_p = 0.0
                await CMPN3m.findOneAndUpdate({pid}, {
                    minipro1_p
                })
            }else{
                const minipro1_p = ((Number(p_minipro1_t))/50)*100
                await CMPN3m.findOneAndUpdate({pid}, {
                    minipro1_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    minipro1all : async (req,res) =>{
        try{ 
            const students = await CMPN3m.find().select('pid minipro1_t')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    minipro1stats : async (req,res) =>{
        try{ 
            const statstud = await CMPN3m.find().select('pid minipro1_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    oopedit : async (req,res) =>{
        try{
            const {pid, oop_t}=req.body

            if(!pid)
                return res.status(400).json({msg: "Please enter the student's PID"})

            if(oop_t<0||oop_t>75)
                return res.status(400).json({msg: "Term marks cannot be more than 75 or less than 0"})
            
            const stu= await CMPN3m.findOne({pid})

            if(!stu) return res.status(400).json({msg: "This PID does not exist."})

            if(oop_t){
                await CMPN3m.findOneAndUpdate({pid}, {
                    oop_t
                })
            }

            const resp = await CMPN3m.findOne({pid}) 
            const p_oop_t = oop_t?oop_t:resp.oop_t

            if(p_oop_t<30){
                const oop_p = 0.0
                await CMPN3m.findOneAndUpdate({pid}, {
                    oop_p
                })
            }else{
                const oop_p = ((Number(p_oop_t))/75)*100
                await CMPN3m.findOneAndUpdate({pid}, {
                    oop_p
                })
            }

            res.json({msg: "Marks Successfully Updated"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    oopall : async (req,res) =>{
        try{ 
            const students = await CMPN3m.find().select('pid oop_t')

            res.json(students)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    oopstats : async (req,res) =>{
        try{ 
            const statstud = await CMPN3m.find().select('pid oop_p')
            res.json(statstud)

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    sem3show : async (req,res) =>{
        try {
            const Studuser = await StudU.findById(req.user.id).select('pid')
            const pid = Studuser.pid
            const sem3 = await CMPN3m.findOne({pid}).select('-_id -createdAt -updatedAt -__v')

            res.json(sem3)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
}

module.exports = cmpn3ctrl