import { TabsContent } from "@/components/ui/tabs";

export const TabContentCompress = () => {
  return (
    <TabsContent value="comprimir" className='h-full flex-1'>
      <section className='flex flex-col flex-1 h-full'>
        <div className='flex-1'>
          Change your password here.
        </div>
        <div className='flex-initial border-2 border-slate-600'>
          options
        </div>
      </section>
    </TabsContent>
  )
}
