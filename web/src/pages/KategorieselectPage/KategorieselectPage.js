import { AiFillStar } from 'react-icons/ai'
import { CiAt } from 'react-icons/ci'
import { FaUserPlus } from 'react-icons/fa'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

// import React, { useEffect } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import * as Contacts from 'expo-contacts';

// import EventEmitter from '../vendor/emitter/EventEmitter';
// import type {IEventEmitter} from '../vendor/emitter/EventEmitter';

import arrow_bw from './arrow_bw.png'
import left_arrow from './left_arrow.png'
import wheel_bw from './luckywheel_bw.png'
import plus_black from './plus_black.jpg'

const KategorieselectPage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Contacts.requestPermissionsAsync();
  //     if (status === 'granted') {
  //       const { data } = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.Emails],
  //       });

  //       if (data.length > 0) {
  //         const contact = data[0];
  //         console.log(contact);
  //       }
  //     }
  //   })();
  // }, []);

  const supported = 'contacts' in navigator

  async function checkProperties() {
    const supportedProperties = await navigator.contacts.getProperties()
    if (supportedProperties.includes('name')) {
      // run code for name support
    }
    if (supportedProperties.includes('email')) {
      // run code for email support
    }
    if (supportedProperties.includes('tel')) {
      // run code for telephone number support
    }
    if (supportedProperties.includes('address')) {
      // run code for address support
    }
    if (supportedProperties.includes('icon')) {
      // run code for avatar support
    }
  }

  const props = ['name', 'email', 'tel', 'address', 'icon']
  const opts = { multiple: true }

  async function getContacts() {
    console.log('retrieve contacts')
    try {
      const contacts = await navigator.contacts.select(props, opts)
      handleResults(contacts)
    } catch (ex) {
      // Handle any errors here.
    }
  }

  return (
    <>
      <MetaTags title="Kategorieselect" description="Kategorieselect page" />

      <div className="items-cemter flex h-screen w-screen flex-col justify-center border border-solid">
        {/* <View style={styles.container}>
      <Text>Contacts Module Example</Text>
      </View> */}

        <div className="flex w-52 flex-col items-center justify-center pl-48">
          <button
            onClick={getContacts}
            className="w-20 bg-black text-xs text-white"
          >
            Check Contacts
          </button>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex w-full justify-start">
              <div className="w-full ">
                <img src={left_arrow} width="20" height="20" />
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex w-full justify-end">
                  <img src={plus_black} width="20" height="20" />
                </div>

                <div className="">
                  <FaUserPlus width="35" height="35" />
                </div>

                <div className="">
                  <AiFillStar width="35" height="35" />
                </div>
              </div>
            </div>

            <div className="relative h-48 w-48 rounded-full bg-black"></div>
            <p className="absolute text-center text-white">Entscheidungsrad</p>
            <div className="flex items-center justify-center gap-36">
              <p className="flex h-12 w-12 flex-col items-center justify-center p-1 text-2xl">
                <CiAt />
                <p className="absolute ml-6 mb-6 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  4
                </p>
              </p>
              <p className="border border-solid border-black p-1">Fertig</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-4">
            <p className="flex h-12 w-60 items-center justify-center border border-solid border-black bg-white p-2 text-center">
              <p className="">Freitext</p>

              <div className="flex flex-row gap-6 pl-10">
                <img src={wheel_bw} width="35" height="35" className="" />
                <div className="w-8"></div>
              </div>
            </p>
            <p className="flex h-12 w-60 flex-row items-center justify-center border border-solid border-black bg-white p-2 text-center">
              <p className="">Essen</p>
              <div className="flex flex-row gap-6 pl-14">
                <img src={wheel_bw} width="35" height="35" />

                <Link to={routes.subkategories()} className="flex items-center">
                  <img src={arrow_bw} width="35" />
                </Link>
              </div>
            </p>
            <p className="flex h-12 w-60 items-center justify-center gap-6 border border-solid border-black bg-white p-2 text-center">
              Sport
              <div className="flex flex-row gap-6 pl-8">
                <img src={wheel_bw} width="35" height="35" />
                <Link to={routes.subkategories()} className="flex items-center">
                  <img src={arrow_bw} width="35" />
                </Link>
              </div>
            </p>
            <p className="flex h-12 w-60 items-center justify-center gap-2 border border-solid border-black bg-white p-2 text-center">
              Unterhalten
              <div className="flex flex-row gap-6 pl-1">
                <img src={wheel_bw} width="35" height="35" />
                <Link to={routes.subkategories()} className="flex items-center">
                  <img src={arrow_bw} width="35" />
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default KategorieselectPage
