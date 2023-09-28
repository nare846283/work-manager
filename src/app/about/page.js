
async function takeTime(){
    await new Promise((resvole) => {
        setTimeout(resvole,3000);
    })
}

export default async function About(){

    await takeTime();

    return(
        <main className="w-full h-[500px] ">
            <h1 className="text-black">This is about Page</h1>
        </main>
    );
}