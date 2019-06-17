

export default function ({store,redirect}) {
   

    console.log(redirect)
    console.log(store)
      //this.$router.push({path:'/login'})
    console.log(store.state.isLogin_admin)
    if(!store.state.isLogin_admin){
          return redirect('/manage_login')
       }
    
  
    
}