"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")

  const customString = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz123456789";
    return Array.from({ length: 6 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  };

  const generate = async () => {
    if (url === "") {
      alert("Please enter a URL");
      return
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const customShortUrl = shortUrl || customString();
    if (!shortUrl) {
      customString();
      setShortUrl(customShortUrl);
    }

    const raw = JSON.stringify({
      "url": url,
      "shorturl": customShortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    // await fetch("http://localhost:3000/api/generate", requestOptions)
    await fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${customShortUrl}`)
        setUrl("")
        setShortUrl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-red-100 my-16 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4'>
      <h1 className='text-3xl font-semibold'>Generate your short URLs</h1>
      <div className='flex flex-col justify-center items-center gap-2 w-full'>
        <input type="text"
          required
          value={url}
          onChange={(e) => { setUrl(e.target.value) }}
          placeholder='Enter your URL'
          className='border p-2 py-1 w-2/3 focus:outline-blue-300' />
        <input type="text"
          value={shortUrl}
          onChange={(e) => (setShortUrl(e.target.value))}
          placeholder='Enter your prefered short url text'
          className='border p-2 py-1 w-2/3 focus:outline-blue-300' />
        <button onClick={generate} className='bg-red-500 px-2 text-xl mt-4 rounded-lg shadow-md hover:bg-red-400 active:shadow-none'>Generate</button>
      </div>
      {generated && <code>
        Short Link : <Link href={generated} target='__balnk' className='text-blue-700' >{generated}</Link>
      </code>}
    </div>
  )
}

export default Shorten