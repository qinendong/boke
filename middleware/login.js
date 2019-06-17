

export default function ({store,redirect}) {
   

    console.log(redirect)
    console.log(store)
      //this.$router.push({path:'/login'})
    if(!store.state.isLogin){
          return redirect('/login')
       }
  
    
}