//fiz um exemplo dessa api para armazenar nossas informações
import { NextResponse } from "next/server";

export async function GETContent() {
    const content = [
        {
            id: 1,
            text: 'Texto test'
        }
    ];
    return NextResponse.json(content)
}
export async function GETLinks(){
    const links =[
        {
            link:'/home',
            name:'home'
        }
    ];
    return NextResponse.json(links);
}