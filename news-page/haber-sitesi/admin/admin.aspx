<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="admin.aspx.cs" Inherits="haber_sitesi.admin.admin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Yazar Kontrol Paneli</title>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/jquery/jquery.slim.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

    <style>
        .card-body {
            background-color: #0094ff;
            font-weight: bold;
        }

        .btnHiza {
            float: left;
            line-height: 10px;
        }
    </style>

    <form id="form1" runat="server">
        <div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="alert alert-warning text-center mt-2" role="alert">
                            Yazar kontrol Paneline Hosgeldiniz!
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body text-center text-white">
                                <asp:Button ID="BtnKekleAc" runat="server" Text="+" Width="50" Height="30" CssClass="btn btn-success btnHiza" OnClick="BtnKekleAc_Click" /><asp:Button ID="BtnKekleKapat" runat="server" Text="-" Width="50" Height="30" CssClass="btn btn-danger btnHiza" OnClick="BtnKekleKapat_Click" />Kategori Ekle
                            </div>
                        </div>

                        <asp:Panel ID="PnlKekle" runat="server">
                            <div class="center">
                                <table>
                                    <tr>
                                        <td>Kategori Adi:</td>
                                        <td>
                                            <asp:TextBox ID="TxtKekle" runat="server" CssClass="form-control"></asp:TextBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <asp:Button ID="BtnKekle" runat="server" Text="Ekle" CssClass="btn btn-primary" onClick="BtnKekle_Click"  />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </asp:Panel>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="card mt-2">
                            <div class="card-body text-center text-white">
                                <asp:Button ID="BtnKduzenleAc" runat="server" Text="+" Width="50" Height="30" CssClass="btn btn-success btnHiza" OnClick="BtnKduzenleAc_Click" /><asp:Button ID="BtnKduzenleKapat" runat="server" Text="-" Width="50" Height="30" CssClass="btn btn-danger btnHiza" OnClick="BtnKduzenleKapat_Click" />Kategori Duzenle
                            </div>
                        </div>

                        <asp:Panel ID="PnlKduzenle" runat="server">
                            <table border="1"  class="table">
                                <tr>
                                    <td>Kategori Adi</td>
                                    <td>Duzenle</td>
                                    <td>Sil</td>
                                </tr>

                                <asp:Repeater ID="RpKatgetir" runat="server">
                                    <ItemTemplate>
                                        <tr>
                                            <td><%#Eval("kategoriAd") %></td>
                                            <td><a href="kategoriduzenle.aspx?kategoriID=<%#Eval("kategoriID") %>" style="color:green;">DUZENLE</a></td>
                                            <td><a href="admin.aspx?kategoriID=<%#Eval("kategoriID") %> &veri=sil "style="color:red;">SIL</a></td>
                                        </tr>
                                    </ItemTemplate>
                                </asp:Repeater>

                            </table>
                        </asp:Panel>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="card mt-2">
                            <div class="card-body text-center text-white">
                                <asp:Button ID="BtnMakaleEkleAc" runat="server" Text="+" Width="50" Height="30" CssClass="btn btn-success btnHiza" OnClick="BtnMakaleEkleAc_Click" /><asp:Button ID="BtnMakaleEkleKapat" runat="server" Text="-" Width="50" Height="30" CssClass="btn btn-danger btnHiza" OnClick="BtnMakaleEkleKapat_Click" />Makale Ekle
                            </div>
                        </div>
                        <asp:Panel ID="PnlMakaleEkle" runat="server">
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
                                        <asp:Button ID="BtnMakaleEkle" runat="server" Text="Ekle" CssClass="btn btn-primary" OnClick="BtnMakaleEkle_Click" />
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                         <div class="card mt-2">
                            <div class="card-body text-center text-white">
                                <asp:Button ID="BtnMakaleDuzenleAc" runat="server" Text="+" Width="50" Height="30" CssClass="btn btn-success btnHiza" OnClick="BtnMakaleDuzenleAc_Click"  /><asp:Button ID="BtnMakaleDuzenleKapat" runat="server" Text="-" Width="50" Height="30" CssClass="btn btn-danger btnHiza" OnClick="BtnMakaleDuzenleKapat_Click"  />Makale Duzenle
                            </div>
                        </div>
                        <asp:Panel ID="PnlMakaleDuzenle" runat="server">
                            <table border="1"  class="table">
                                <tr>
                                    <td>Makale Adi</td>
                                    <td>Duzenle</td>
                                    <td>Sil</td>
                                </tr>

                                <asp:Repeater ID="RpMakaleCek" runat="server">
                                    <ItemTemplate>
                                        <tr>
                                            <td><%#Eval("makaleBaslik") %></td>
                                            <td><a href="makaleduzenle.aspx?makaleID=<%#Eval("makaleID") %>" style="color:green;">Duzenle</a></td>
                                            <td><a href="admin.aspx?makaleID=<%#Eval("makaleID") %> &silme=sil " style="color:red;">Sil</a></td>
                                        </tr>
                                    </ItemTemplate>
                                </asp:Repeater>
                            </table>
                        </asp:Panel>
                    </div>
                </div>

            </div>

        </div>
    </form>
</body>
</html>
