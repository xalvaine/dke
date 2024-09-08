import { Header } from '@/widgets/header'
import { Knowledge } from '@/widgets/knowledge'
import { Participants } from '@/widgets/participants'
import { Offer } from '@/widgets/offer'
import { Skills } from '@/widgets/skills'
import { Tests } from '@/widgets/tests'
import { Courses } from '@/widgets/courses'
import {Stories} from "@/widgets/stories";
import {ForEmployers} from "@/widgets/for-employers";

export const Home = () => {
  return (
    <>
      <Header />
      <Knowledge />
      <Participants />
      <Offer />
      <Skills />
      <Tests />
      <Courses />
      <Stories />
      <ForEmployers />
    </>
  )
}
