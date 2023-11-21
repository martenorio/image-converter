import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabContentTransform } from "./TabContentTransform";
import { TabContentCompress } from "./TabContentCompress";

export const ContainerTabs = () => {

  return (
    <Tabs defaultValue="convertir" className="flex flex-col w-full">
      <div className='flex-initial flex flex-row justify-center my-5'>
        <TabsList>
          <TabsTrigger value="convertir">Convertir</TabsTrigger>
          <TabsTrigger value="comprimir">Comprimir</TabsTrigger>
        </TabsList>
      </div>
      <TabContentTransform />
      <TabContentCompress />
    </Tabs>
  )
}
