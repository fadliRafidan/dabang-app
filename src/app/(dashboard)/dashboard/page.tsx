import { BarGraph } from '@/components/charts/bar-graph';
import { CustomerSatisfationGraph } from '@/components/charts/customer-satisfation-graph';
import { SalesMappingGraph } from '@/components/charts/sales-mapping-graph';
import SalesSummary from '@/components/charts/sales-summary';
import { TargetVsRealityGraph } from '@/components/charts/target-vs-realitty-graph';
import { TopProduct } from '@/components/charts/top-product';
import { VisitorGraph } from '@/components/charts/visitor-graph';
import { VolumeVsServiceLevelGraph } from '@/components/charts/volume-vs-level-graph';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function page() {
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 py-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4">
                        <SalesSummary />
                    </div>

                    <div className="col-span-4 lg:col-span-3">
                        <VisitorGraph />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-10">
                    <div className="col-span-4">
                        <BarGraph />
                    </div>
                    <div className="col-span-4  lg:col-span-3">
                        <CustomerSatisfationGraph />
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                        <TargetVsRealityGraph />
                    </div>
                    <Card className="col-span-4 h-auto">
                        <CardHeader>
                            <CardTitle className='text-lg'>Top Product</CardTitle>
                        </CardHeader>
                        <CardContent className='h-full'>
                            <TopProduct />
                        </CardContent>
                    </Card>
                    <div className="col-span-4 lg:col-span-3">
                        <SalesMappingGraph />
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                        <VolumeVsServiceLevelGraph />
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}
