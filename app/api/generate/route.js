import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = await client.db("biturls");
    const collection = db.collection("url");

    const savedUrl = await collection.findOne({shorturl: body.shorturl});
    const savedShortUrl = await collection.findOne({url: body.url});

    if (savedShortUrl) {
        return Response.json({success: false, error: true, message: "URL already exist!"})
    }
    if (savedUrl) {
        return Response.json({success: false, error: true, message: "Short URL already exist!"})
    }

    const  result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })


    return Response.json({success: true, error: false, message: "URL generated Succesfully!"})
}