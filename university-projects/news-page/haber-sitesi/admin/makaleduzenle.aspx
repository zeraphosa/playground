<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="makaleduzenle.aspx.cs" Inherits="haber_sitesi.admin.makaleduzenle" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Makale Duzenle</title>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/jquery/jquery.slim.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table class="table">
                <tr>
                    <td>Makale Baslik:</td>
                    <td>
                        <asp:TextBox ID="TxtMakaleEkle" runat="server" CssClass="form-control"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>Makale Ozet:</td>
                    <td>
                        <asp:TextBox ID="TxtMakaleOzet" runat="server" CssClass="form-control" Height="150px" TextMode="MultiLine"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>Makale Icerik:</td>
                    <td>
                        <asp:TextBox ID="TxtMakaleIcerik" runat="server" CssClass="form-control" Height="300px" TextMode="MultiLine"></asp:TextBox>
                    </td>
                </tr>

                <tr>
                    <td>Kategori:</td>
                    <td>
                        <asp:DropDownList ID="DropDownList1" runat="server"></asp:DropDownList>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <asp:Button ID="BtnMakaleDuzenle" runat="server" Text="Duzenle" CssClass="btn btn-primary" OnClick="BtnMakaleDuzenle_Click" />
                    </td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
