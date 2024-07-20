import { ProfileCard } from '@/components/profile-card'

export default function ProfilePage() {
  return (
    <div className="m-auto mt-10 flex w-full max-w-screen-wrapper gap-4 px-6">
      <ProfileCard />
      <div className="h-[600px] w-full bg-black p-5">
        <span className="text-xl uppercase">Seus Endereços</span>
        <div className="mt-10 flex flex-col gap-2">
          <button className="w-max underline">Novo Endereços</button>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border border-zinc-700 p-4">
              <div className="flex flex-col">
                <span>Mateus Gustavo</span>
                <span>Rua tal numero, 20</span>
                <span>Cidade tal, 12121</span>
                <span>Brasil</span>
              </div>
              <div className="flex flex-col gap-2">
                <button className="underline">Editar</button>
                <button className="underline">Deletar</button>
              </div>
            </div>
            <div className="flex justify-between border border-zinc-700 p-4">
              <div className="flex flex-col">
                <span>Mateus Gustavo</span>
                <span>Rua tal numero, 20</span>
                <span>Cidade tal, 12121</span>
                <span>Brasil</span>
              </div>
              <div className="flex flex-col gap-2">
                <button className="underline">Editar</button>
                <button className="underline">Deletar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
