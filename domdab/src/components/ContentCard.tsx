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
          <CardTitle>Card Title</CardTitle>
          <CardDescription>{text}</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </>
  );
};

export default ContentCard;
