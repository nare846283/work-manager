export default function ProfileLayout({children}){
    return(
        <main className="w-full h-[500px] ">
            <h1 className="text-black">This is profile header</h1>
            {children}
            <h1>this is profile footer</h1>
        </main>
    )
}