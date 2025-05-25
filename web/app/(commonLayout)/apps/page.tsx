'use client'
import { useTranslation } from 'react-i18next'
import { RiDiscordFill, RiGithubFill } from '@remixicon/react'
import Link from 'next/link'
import style from '../list.module.css'
import Apps from './Apps'
import { useEducationInit } from '@/app/education-apply/hooks'
import { useGlobalPublicStore } from '@/context/global-public-context'

const AppList = () => {
  const { t } = useTranslation()
  useEducationInit()
  const { systemFeatures } = useGlobalPublicStore()
  return (
    <div className='relative flex h-0 shrink-0 grow flex-col overflow-y-auto bg-background-body'>
      <Apps />
      {!systemFeatures.branding.enabled && <footer className='shrink-0 grow-0 px-12 py-6'>
        <div className='mt-3 flex items-center gap-2'>
        </div>
      </footer>}
    </div >
  )
}

export default AppList
