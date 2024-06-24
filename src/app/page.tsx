'use client'
export default function Home() {
  return (
    <main className="min-h-screen w-screen">
       <nav className="h-20 bg-white"></nav>

       <div>
         <h1 className="text-4xl">Let's calculate distance from Google maps</h1>
         
         <div>
           <div></div>
           <div>
             
             <form>
                <input type="text" name="origin" />
                <input type="text" name="stop" />
                <input type="text" name="destination" />
             </form>
 
           </div>
         </div>
       </div>
    </main>
  );
}
