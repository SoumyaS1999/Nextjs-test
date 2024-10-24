import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


const uri = "mongodb+srv://soumya:soumyastocks@mydatabase.5mhcjzl.mongodb.net/";
const client = new MongoClient(uri);

export async function GET(request) {
  try {
    await client.connect();
    const database = client.db('User');
    const usersCollection = database.collection('users');

    
    const users = await usersCollection.find({}).toArray();

    return NextResponse.json({ ok: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ ok: false, error: "Error fetching users" });
  } finally {
    
    await client.close();
  }
}

export async function POST(request) {
  let body = await request.json();
  try {
    await client.connect();
    const database = client.db('User');
    const usersCollection = database.collection('users');

    
    const user = await usersCollection.insertOne(body);

    return NextResponse.json({ ok: true, user });
  } catch (error) {
    console.error("Error inserting user:", error);
    return NextResponse.json({ ok: false, error: "Error inserting user" });
  } finally {
    
    await client.close();
  }
}
