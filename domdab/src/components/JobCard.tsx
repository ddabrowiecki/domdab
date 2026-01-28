import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContentCardProps {
  text: string;
}

const ContentCard = ({ text }: ContentCardProps) => {
  return (
    <>
      <Card className="content-card">
        <CardHeader>
          <CardTitle>Reddit</CardTitle>
          <CardDescription>{text}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <p>Card Content</p> */}
        </CardContent>
      </Card>
    </>
  );
};

export default ContentCard;
