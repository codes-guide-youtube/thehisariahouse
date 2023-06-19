"use client";
import { Client, Databases, Query } from "appwrite";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("thehisariahub");
  const databases = new Databases(client);

  const database_id = '648f17f63d89e78e9f0e'
  const collection_id = '648f17fd583550a5bc7a'

  let balance = 0
const Page = () => {
const [transaction, settransaction] = useState([])
useEffect(() => {
  let promise = databases.listDocuments(
    // database id
    database_id,
    // collection id
    collection_id,
);

promise.then(function (response) {
    console.log(response);
    settransaction(response.documents);
}, function (error) {
    console.log(error);
});
}, [])
var date;
var formattedDate;
transaction.forEach((transaction) => {
  date = new Date(transaction.date)
  formattedDate = date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});
var balance = 0;
let trans_amount;
transaction.forEach((transaction) => {
  trans_amount = transaction.amount;
  balance += trans_amount;
})


  return (
    <div>
      <Head>
        <title>Balance</title>
      </Head>
      <h1 className="text-center text-xl">Current Balance: ₹{balance}</h1>
      <div className="pl-3 mx-auto mt-10 grid max-w-2xl grid-cols-1 my-5 gap-x-8 gap-y-16 border-t border-gray-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {transaction.map((transaction) => (
          <section
            key={transaction.id}
            className="flex max-w-xl flex-col items-start justify-between bg-gray-700 p-10 rounded-lg"
          >
            <div className="flex items-center gap-x-4 text-xs"></div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-100">
                <span className="absolute inset-0" />₹{transaction.amount}
              </h3>
              <h3 className="text-xl my-7">{transaction.remarks}</h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-100">
                {formattedDate}
              </p>
            </div>
          </section>
        ) )}
      </div>
    </div>
  );
};

export default Page;
