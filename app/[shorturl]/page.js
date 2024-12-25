import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    const shorturl = (await params).shorturl;

    const client = await clientPromise;
    const db = await client.db("biturls");
    const collection = db.collection("url");

    const doc = await collection.findOne({shorturl: shorturl})
    if (doc) {
        return redirect(doc.url)
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    return <div>url: {shorturl}</div>
}