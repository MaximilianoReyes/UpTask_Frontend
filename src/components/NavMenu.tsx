import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../types'
import { useQueryClient } from '@tanstack/react-query'

type NavManuProps = {
  name: User['name']
}

export default function NavMenu({name} : NavManuProps) {

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN')
    queryClient.removeQueries({queryKey: ['user']})
    navigate('/auth/login')
  }

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-sky-500">
        <Bars3Icon className='w-10 h-10 text-white ' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
          <div className="w-full lg:w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <p className='text-center py-3 text-xl'>Hola {name}</p>
            <div className='-mx-4'>
              <Link
                to=''
                className='block w-full p-2 hover:bg-gray-200 cursor-pointer'>
                <div className='ml-3'>
                  Mi Perfil
                </div>
              </Link>
              <Link
                to='/'
                className='block w-full p-2 hover:bg-gray-200 cursor-pointer'>
                <div className='ml-3'>
                  Mis Proyectos
                </div>
              </Link>
              <button
                className='block w-full p-2 hover:bg-gray-200 text-left'
                type='button'
                onClick={logout}>
                <div className='ml-3'>
                  Cerrar Sesión
                </div>
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}