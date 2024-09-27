const logout = async (req, res)=>{
const {_id} = req.user
const user = await User.findByIdAndUpdate(_id, { token: null });
res.json({
    message: "SignOut succes",
})
}
export default logout