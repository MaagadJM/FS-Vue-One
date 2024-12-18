/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

console.log(supabase)

// const personName = faker.person.fullName()
// const personBio = faker.person.bio()

// console.log('Hi! My name is', personName, '. I am a ', personBio)
